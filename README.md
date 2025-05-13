# E-commerce Web Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Overview

This e-commerce platform provides a complete shopping experience with user authentication, product browsing, cart management, checkout process, and order management. It includes both customer-facing and admin interfaces.

## Features

### Customer Features
- User authentication (register, login, logout)
- Browse products with filtering options
- Search functionality
- Product categories (Men, Women, Kids, Accessories, Footwear)
- Shopping cart management
- Address management
- Order placement and history
- Multiple payment options (PayPal, Paystack)

### Admin Features
- Dashboard with analytics
- Product management (add, edit, delete)
- Order management
- Feature image management

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Redux Toolkit for state management
- Tailwind CSS for styling
- Radix UI components
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Cloudinary for image storage
- PayPal and Paystack payment integrations

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   ├── config/         # Configuration files
│   │   └── App.jsx         # Main application component
│   └── ...
│
├── server/                 # Backend Node.js application
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   │   ├── admin/          # Admin routes
│   │   ├── auth/           # Authentication routes
│   │   ├── common/         # Shared routes
│   │   └── shop/           # Customer routes
│   ├── helpers/            # Utility functions
│   ├── .env                # Environment variables
│   └── server.js           # Main server file
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account
- Cloudinary account (for image storage)
- PayPal and Paystack accounts (for payment processing)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Set up environment variables
   - Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```

### Running the Application

1. Start the server
```bash
cd server
npm run dev
```

2. Start the client
```bash
cd client
npm run dev
```

3. Access the application
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check-auth` - Check authentication status

### Shop (Customer)
- `GET /api/shop/products/get` - Get filtered products
- `GET /api/shop/products/get/:id` - Get product details
- `POST /api/shop/cart/add` - Add item to cart
- `GET /api/shop/cart/get/:userId` - Get cart items
- `PUT /api/shop/cart/update-cart` - Update cart item quantity
- `DELETE /api/shop/cart/:userId/:productId` - Remove item from cart
- `POST /api/shop/address/add` - Add address
- `GET /api/shop/address/get/:userId` - Get user addresses
- `PUT /api/shop/address/update/:userId/:addressId` - Update address
- `DELETE /api/shop/address/delete/:userId/:addressId` - Delete address
- `POST /api/shop/order/create` - Create order
- `GET /api/shop/order/list/:userId` - Get user orders
- `GET /api/shop/order/details/:id` - Get order details
- `POST /api/shop/order/capture` - Capture payment

### Admin
- `POST /api/admin/products/upload-image` - Upload product image
- `POST /api/admin/products/add` - Add product
- `PUT /api/admin/products/edit/:id` - Edit product
- `DELETE /api/admin/products/delete/:id` - Delete product
- `GET /api/admin/products/get` - Get all products
- `GET /api/admin/orders/get` - Get all orders
- `GET /api/admin/orders/details/:id` - Get order details
- `PUT /api/admin/orders/update/:id` - Update order status

## License

ISC

## Author

Sangam Mukherjee
