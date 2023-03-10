import Image from 'next/image';
import paypalLogo from '@/../public/images/paypay1.svg';
import paypalCheckout from '@/../public/images/paypal-ceckout.svg';
const Paypal = ({ theme, openItems, toggleItem, selectSigleItemToggle }) => {
  console.log(theme);
  return (
    <div className="bg-[rgb(245,247,250)] p-6 rounded-md">
      <div className="flex justify-between items-center ">
        <div className="flex  gap-x-2">
          <div
            onClick={() => selectSigleItemToggle(1)}
            className={`w-6 relative cursor-pointer  h-6 border border-solid border-[#01A8FF] rounded-full`}
          >
            {(theme === 1 || openItems === 1) && (
              <div
                className={` w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-4 mx-auto inset-0    bg-[#01A8FF]  `}
              ></div>
            )}
          </div>
          <h2
            onClick={() => toggleItem(1)}
            className="cursor-pointer text-lg font-normal"
          >
            Pay with PayPal
          </h2>
        </div>
        {/* paypal logo */}
        <Image
          src={paypalLogo}
          alt="paypal"
          width={100}
          height={100}
          className=""
        />
      </div>
      {/* Collapse checkout */}

      <div className={`pt-2 ${openItems === 1 ? 'block' : 'hidden'}`}>
        <h2 className="text-base pr-5 text-[#202942CC] font-normal">
          To finish your purchase, click the PayPal button and log on to PayPal
          using your email and password.
        </h2>
        <Image
          src={paypalCheckout}
          alt="paypal"
          width={250}
          height={100}
          className="pt-4 px-3"
        />
      </div>
    </div>
  );
};

export default Paypal;
