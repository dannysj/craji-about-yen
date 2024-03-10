import React from 'react';
import './RoundedButton.css'; // Make sure to import the CSS file

const RoundedButton = ({ borderColor = 'white', children, onClick }) => {
  const buttonStyle = {
    border: `2px solid ${borderColor}`,
    borderRadius: '50px', // Corner radius of 50
    backgroundColor: 'transparent', // No fill color
    color: borderColor, // Text color matches the border color
    padding: '5px 20px',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease', // Smooth transform transition
  };

  return (
    <button className="rounded-button" onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default RoundedButton;