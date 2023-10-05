import React, { useState, useEffect } from "react";

const ErrorMessage = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const handleClick = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } bg-red-500 text-white p-3 rounded-md absolute top-0 left-2/3 m-4 max-sm:w-46 max-sm:left-1/3`}
      onClick={handleClick}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
