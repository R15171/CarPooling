import Navbar from '../Layout/Navbar';
import React, { useState } from 'react';

const CarpoolPaymentUPI = ({ amount, upiId, onPaymentSuccess, onPaymentError }) => {
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paymentErrorLocal, setPaymentErrorLocal] = useState(null);

  const handlePayment = async () => {
    setPaymentErrorLocal(null);
    if (!transactionId) {
      setPaymentErrorLocal('Please enter the Transaction ID.');
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch('/api/verifyPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          upiId,
          transactionId,
          amount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        onPaymentSuccess(data);
        setTransactionId('');
      } else {
        onPaymentError(data.error || 'Payment verification failed.');
      }
    } catch (error) {
      onPaymentError(error.message || 'An error occurred.');
    } finally {
      setProcessing(false);
    }
  };

  const styles = {
    paymentContainer: {
      paddingTop:"130px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
    },
    paymentTable: {
      
      width: 'auto',
      borderCollapse: 'collapse',
      margin: '20px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #eee',
    },
    confirmButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff', // Example color
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    errorMessage: {
      color: 'red',
      marginTop: '5px',
    },
    processingMessage: {
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (

    <>  <Navbar/>
    <div style={styles.paymentContainer}>
        
     
      <table style={styles.paymentTable}>
        <tbody>
          <tr>
            <td style={styles.tableCell}>UPI ID:</td>
            <td style={styles.tableCell}>{upiId}</td>
          </tr>
          <tr>
            <td style={styles.tableCell}>Transaction ID:</td>
            <td style={styles.tableCell}>
              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
              {paymentErrorLocal && <p style={styles.errorMessage}>{paymentErrorLocal}</p>}
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={styles.tableCell}> {/* Apply style to the cell */}
              <button onClick={handlePayment} disabled={processing} style={styles.confirmButton}>
                {processing ? 'Verifying...' : 'Verify Payment'}
              </button>
            </td>
          </tr>
          {processing && (
            <tr>
              <td colSpan="2" style={styles.processingMessage}>
                <p>Processing...</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CarpoolPaymentUPI;
