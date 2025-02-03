
import { useState } from "react";
import  CarpoolPaymentUPI from "./CarpoolPaymentUPI";
import { useNavigate } from "react-router-dom";
// Example usage:
const Payment = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const nav = useNavigate();
    const rideAmount = 15;
    const userUPI = "user@exampleupi"; // Example UPI ID
  
    const handlePaymentSuccess = (data) => {
      console.log('Payment verified successfully:', data);
      setPaymentSuccess(true);
      alert("Payment successful! Thank you for your ride.");
      nav('/');
    };
  
    const handlePaymentError = (error) => {
      console.error('Payment error:', error);
      setPaymentError(error);
      alert("Payment failed. Please try again.");
      nav('/')
    };
  
    return (
      <div>
        {paymentSuccess ? (
          <p>Payment successful! Thank you for your ride.</p>
        ) : (
          <CarpoolPaymentUPI
            amount={rideAmount}
            upiId={userUPI} // Pass the UPI ID as a prop
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
          />
        )}
  
        {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
      </div>
    );
  };
  
  export default Payment;





  