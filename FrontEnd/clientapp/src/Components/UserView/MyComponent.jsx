
import { useState } from "react";
import  CarpoolPaymentUPI from "./CarpoolPaymentUPI";
// Example usage:
const MyComponent = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const rideAmount = 15;
    const userUPI = "user@exampleupi"; // Example UPI ID
  
    const handlePaymentSuccess = (data) => {
      console.log('Payment verified successfully:', data);
      setPaymentSuccess(true);
    };
  
    const handlePaymentError = (error) => {
      console.error('Payment error:', error);
      setPaymentError(error);
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
  
  export default MyComponent;





  