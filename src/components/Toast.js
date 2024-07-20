import React, { useEffect } from 'react';
import './Toast.css'; // Import the CSS file for styling

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      // Automatically hide the toast after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      // Clear the timer if the component unmounts before the timeout
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div className={`toast ${message ? 'show' : 'hide'}`}>
      {message}
      <button onClick={onClose} className="toast-close">
        &times;
      </button>
    </div>
  );
};

export default Toast;
