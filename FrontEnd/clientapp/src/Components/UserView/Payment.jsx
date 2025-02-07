
// import { useState } from "react";
// import  CarpoolPaymentUPI from "./CarpoolPaymentUPI";
// import { useNavigate } from "react-router-dom";
// // Example usage:
// const Payment = () => {
//     const [paymentSuccess, setPaymentSuccess] = useState(false);
//     const [paymentError, setPaymentError] = useState(null);
//     const nav = useNavigate();
//     const rideAmount = 15;
//     const userUPI = "user@exampleupi"; // Example UPI ID
  
//       const handlePaymentSuccess = (data) => {
//       console.log('Payment verified successfully:', data);
//       setPaymentSuccess(true);
//       alert("Payment successful! Thank you for your ride.");
//       nav('/');
//     };
  
//     const handlePaymentError = (error) => {
//       console.error('Payment error:', error);
//       setPaymentError(error);
//       alert("Payment failed. Please try again.");
//       nav('/')
//     };
  
//     return (
//       <div>
//         {paymentSuccess ? (
//           <p>Payment successful! Thank you for your ride.</p>
//         ) : (
//           <CarpoolPaymentUPI
//             amount={rideAmount}
//             upiId={userUPI} // Pass the UPI ID as a prop
//             onPaymentSuccess={handlePaymentSuccess}
//             onPaymentError={handlePaymentError}
//           />
//         )}
  
//         {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
//       </div>
//     );
//   };
  
//   export default Payment;


// new


import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CarpoolPaymentUPI from "./CarpoolPaymentUPI";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [reqInf, setReqInf] = useState(null);
  const nav = useNavigate();
  const location = useLocation(); // Get state from the location object
  
  // Retrieve reqInf from location.state (passed from previous page)
  useEffect(() => {
    if (location.state?.reqInf) {
      setReqInf(location.state.reqInf);
    } else {
      // Handle missing reqInf (perhaps redirect to a fallback page)
      nav("/");
    }
  }, [location.state, nav]);

  const rideAmount = 15; // Static amount for the example
  const userUPI = "user@exampleupi"; // Example UPI ID

  const handlePaymentSuccess = (data) => {
    console.log("Payment verified successfully:", data);
    setPaymentSuccess(true);
    alert("Payment successful! Thank you for your ride.");

    // Now make the backend call with the stored reqInf data
    if (reqInf) {
      fetch("https://localhost:9131/api/User/BookRide", reqInf)
        .then((response) => {
          if (response.ok) {
            nav("/confirmation"); // Redirect to the confirmation page
          } else {
            response.json().then((data) => {
              alert(`Error: ${data.message}`);
            });
          }
        })
        .catch((error) => {
          console.error("Error confirming booking:", error);
          alert("Something went wrong. Please try again later.");
        });
    }
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
    setPaymentError(error);
    alert("Payment failed. Please try again.");
    nav("/");
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

      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
    </div>
  );
};

export default Payment;


  
