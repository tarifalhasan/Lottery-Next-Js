import React from 'react';

const Button = ({ display, btnBg }) => {
  let textColor = '';
  if (btnBg === '.bg-[#01A8FF]') {
    textColor = 'text-[#111]';
  } else {
    textColor = 'text-[#fff]';
  }
  return (
    <button
      type="button"
      className={`${btnBg} ${textColor} px-5 rounded-full py-2.5 ${display}`}
    >
      Read More
    </button>
  );
};

export default Button;
