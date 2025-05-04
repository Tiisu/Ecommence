import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function PaystackReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const reference = params.get("reference");
  const orderId = params.get("orderId");

  useEffect(() => {
    if (reference && orderId) {
      dispatch(capturePayment({ reference, orderId })).then((data) => {
        if (data?.payload?.success) {
          navigate("/shop/payment-success");
        } else {
          // Handle payment failure
          console.error("Payment verification failed:", data?.payload);
          navigate("/shop/payment-failed");
        }
      });
    }
  }, [reference, orderId, dispatch, navigate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verifying Payment...Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaystackReturnPage;
