import Navbar from '../Layout/Navbar';
import React, { useState, useEffect } from 'react';

const CarpoolPaymentUPI = ({ amount, upiId, onPaymentSuccess, onPaymentError }) => {
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paymentErrorLocal, setPaymentErrorLocal] = useState(null);
  const [qrCodeNumber, setQrCodeNumber] = useState(null); // Store the QR code number

  
  useEffect(() => {
    setQrCodeNumber(Math.floor(1000 + Math.random() * 9000));
  }, []);

  const handlePayment = () => {
    setPaymentErrorLocal(null);

    if (!transactionId.trim()) {
      setPaymentErrorLocal('⚠️ Please enter the Transaction ID.');
      return;
    }

    if (transactionId !== qrCodeNumber?.toString()) {
      setPaymentErrorLocal('❌ Incorrect Transaction ID. Please enter the number from the QR code.');
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      onPaymentSuccess({ success: true, transactionId });
      setTransactionId('');
      setProcessing(false);
    }, 1000);
  };

  const styles = {
    paymentContainer: {
      paddingTop: '130px',
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
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px',
      display: 'block',
      margin: '0 auto',
    },
    errorMessage: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '5px',
    },
    processingMessage: {
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.paymentContainer}>
        <table style={styles.paymentTable}>
          <tbody>
            <tr>
              <td style={styles.tableCell}>UPI ID:</td>
              <td style={styles.tableCell}>{upiId}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Scan QR Code</td>
              <td style={styles.tableCell}>
                {qrCodeNumber && (
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeNumber}`}
                    alt="Transaction QR Code"
                    className="img-fluid"
                  />
                )}
              </td>
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
              <td colSpan="2" style={styles.tableCell}>
                <button onClick={handlePayment} disabled={processing} style={styles.confirmButton}>
                  {processing ? 'Verifying...' : 'Confirm'}
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
      <p style={{ textAlign: 'center' }}>
        Scan the QR code and enter the 4-digit number shown in the QR.
      </p>
    </>
  );
};

export default CarpoolPaymentUPI;
