import React, { useState, useEffect } from "react";

const SuccessMessage = ({ firstName, lastName, onClose }) => {
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

  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-3 rounded-md text-center text-6xl max-sm:text-3xl`}
    >
      Hello, {firstName} {lastName}!
    </div>
  );
};

export default SuccessMessage;
