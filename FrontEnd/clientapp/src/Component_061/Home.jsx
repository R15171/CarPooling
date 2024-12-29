import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
    
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Publish a Ride</button>
        <button style={styles.button}>Book a Ride</button>
      </div>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '20px 40px',
    fontSize: '36px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
