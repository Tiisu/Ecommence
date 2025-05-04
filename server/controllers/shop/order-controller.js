const paystack = require("../../helpers/paystack");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");
const https = require("https");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    // Create a new order in the database
    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod: "paystack", // Change to paystack
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
    });

    await newlyCreatedOrder.save();

    // Initialize Paystack transaction
    const params = JSON.stringify({
      email: req.body.email || "customer@example.com", // Use customer email or a default
      amount: Math.round(totalAmount * 100), // Paystack amount is in kobo (smallest currency unit)
      callback_url: `http://localhost:5173/shop/paystack-return?orderId=${newlyCreatedOrder._id}`,
      metadata: {
        order_id: newlyCreatedOrder._id.toString(),
        cart_items: JSON.stringify(cartItems.map(item => ({
          productId: item.productId,
          title: item.title,
          quantity: item.quantity
        })))
      }
    });

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_test_key'}`,
        'Content-Type': 'application/json'
      }
    };

    const paystackReq = https.request(options, (paystackRes) => {
      let data = '';

      paystackRes.on('data', (chunk) => {
        data += chunk;
      });

      paystackRes.on('end', () => {
        const responseData = JSON.parse(data);

        if (responseData.status) {
          res.status(201).json({
            success: true,
            approvalURL: responseData.data.authorization_url,
            orderId: newlyCreatedOrder._id,
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Error initializing Paystack payment",
            error: responseData
          });
        }
      });
    }).on('error', (error) => {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error while creating Paystack payment",
        error: error.message
      });
    });

    paystackReq.write(params);
    paystackReq.end();

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
      error: e.message
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { reference, orderId } = req.body;

    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order cannot be found",
      });
    }

    // Verify the payment with Paystack
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: `/transaction/verify/${reference}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_test_key'}`
      }
    };

    const verifyRequest = https.request(options, (verifyRes) => {
      let data = '';

      verifyRes.on('data', (chunk) => {
        data += chunk;
      });

      verifyRes.on('end', async () => {
        const responseData = JSON.parse(data);

        if (responseData.status && responseData.data.status === 'success') {
          // Payment was successful
          order.paymentStatus = "paid";
          order.orderStatus = "confirmed";
          order.paymentId = reference;

          // Update product stock
          for (let item of order.cartItems) {
            let product = await Product.findById(item.productId);

            if (!product) {
              return res.status(404).json({
                success: false,
                message: `Product not found: ${item.title}`,
              });
            }

            product.totalStock -= item.quantity;
            await product.save();
          }

          // Delete the cart
          const getCartId = order.cartId;
          if (getCartId) {
            await Cart.findByIdAndDelete(getCartId);
          }

          await order.save();

          res.status(200).json({
            success: true,
            message: "Order confirmed",
            data: order,
          });
        } else {
          // Payment failed
          res.status(400).json({
            success: false,
            message: "Payment verification failed",
            data: responseData
          });
        }
      });
    }).on('error', (error) => {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error verifying payment",
        error: error.message
      });
    });

    verifyRequest.end();

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
      error: e.message
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
