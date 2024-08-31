import React from 'react';
import './Button.css';

function Button({ onClick, children, className, iconSrc, altText, colorScheme = 'primary', variant = 'solid', disabled }) {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className} ${colorScheme} ${variant}`}
      disabled={disabled}
    >
      {iconSrc && <img src={iconSrc} alt={altText} className="button-icon" />}
      {children}
    </button>
    );
}

export default Button;
