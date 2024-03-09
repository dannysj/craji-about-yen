import React from 'react';
import './BackgroundImage.css'; // Ensure the CSS file is imported

const BackgroundImage = ({ imageVar, children, style = {}, className = '' }) => {
  // Combine provided className with 'background-image' for default styling
  const combinedClassName = `background-image ${className}`.trim();

  const defaultStyle = {
    backgroundImage: `var(--${imageVar})`,
    ...style, // Custom styles override defaults
  };

  return (
    <div className={combinedClassName} style={defaultStyle}>
      {children}
    </div>
  );
};

export default BackgroundImage;