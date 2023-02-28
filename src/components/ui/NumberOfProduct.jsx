import React, { useState } from 'react';

const NumberOfProduct = ({ price }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-between lg:justify-start gap-14">
      <div>
        <div className="self-center flex">
          <h3 className="text-2xl text-center text-[#464848] font-semibold  ">
            ${price}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <button
          className="text-[#464848] bg-[#F0F0F0]  rounded-full w-8 h-8 flex self-center justify-center items-center"
          onClick={decrementCount}
        >
          -
        </button>

        <span className="">{count}</span>
        <button
          className="text-[#464848] bg-[#F0F0F0]  rounded-full w-8 h-8 flex self-center justify-center items-center"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberOfProduct;
