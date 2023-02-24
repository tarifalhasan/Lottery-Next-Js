import React from 'react';

const Button = ({ display }) => {
  return (
    <button
      type="button"
      className={`bg-white px-5 rounded-full py-2.5 ${display}`}
    >
      Read More
    </button>
  );
};

export default Button;
