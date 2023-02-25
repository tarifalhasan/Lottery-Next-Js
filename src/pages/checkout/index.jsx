import { useState, useEffect } from 'react';
import OrderSmmary from './OrderSmmary';
import Paypal from './Paypal';
import Stripe from './Stripe';
const Checkout = () => {
  const [openItems, setOpenItems] = useState({});
  const [theme, setTheme] = useState({});

  const toggleItem = index => {
    setOpenItems({ [index]: !openItems[index] });
    setTheme({ [index]: !theme[index] });
  };

  return (
    <section className="main-container py-10">
      <div className="block gap-10 lg:flex ">
        <div className="basis-[60%]">
          <div className="py-10 flex flex-col gap-y-3">
            <h2 className="text-2xl font-normal">Payment Method</h2>
            <div className="w-full border-dashed border border-[#8C9BA3] "></div>
          </div>
          {/* Paypal integration */}
          <Paypal openItems={openItems} theme={theme} toggleItem={toggleItem} />
          {/* stripe */}
          <div className="w-full border-dashed border my-4 border-[#8C9BA3] "></div>
          <Stripe openItems={openItems} theme={theme} toggleItem={toggleItem} />
          <div className="w-full border-dashed border my-4 border-[#8C9BA3] "></div>
          <div className="flex justify-between  gap-2">
            <input type="checkbox" className="w-5 h-5 block rounded-xl" />
            <p className="text-[1em] text-[#2B2F2FE5] opacity-90 font-normal ">
              By Placing Your Order, You Agree to Prize Pursuit
              <span className="text-[#01A8FF] leading-[4px] block">
                Terms of Service
              </span>
            </p>
            <button className="add_new_cart_btn px-6 py-3 block">
              Complete Order
            </button>
          </div>
        </div>
        <div className="basis-[40%] py-10">
          <OrderSmmary />
        </div>
      </div>
    </section>
  );
};
export default Checkout;
