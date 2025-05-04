import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentFailedPage() {
  const navigate = useNavigate();

  return (
    <Card className="p-10">
      <CardHeader className="p-0">
        <CardTitle className="text-4xl">Payment failed!</CardTitle>
      </CardHeader>
      <p className="mt-4">
        Your payment could not be processed. Please try again or contact support.
      </p>
      <div className="flex gap-4 mt-5">
        <Button onClick={() => navigate("/shop/checkout")}>
          Try Again
        </Button>
        <Button variant="outline" onClick={() => navigate("/shop/home")}>
          Return to Home
        </Button>
      </div>
    </Card>
  );
}

export default PaymentFailedPage;
