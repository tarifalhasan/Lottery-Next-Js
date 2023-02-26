import striptLogo from '@/../public/images/stripe_gateway.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import paypalLogo from '@/../public/images/paypal.svg';
import mastercardLogo from '@/../public/images/mastercard.svg';
import amex2Logo from '@/../public/images/amex2.svg';

import Input from '@/components/ui/Input';
import Image from 'next/image';
const Stripe = ({ theme, openItems, toggleItem, selectSigleItemToggle }) => {
  return (
    <div className="bg-[#F5F7FA] p-6 rounded-md">
      <div className="flex justify-between cursor-pointer items-center ">
        <div className="flex items-center gap-x-2">
          <div
            className={`w-6 relative   h-6 border border-solid border-[#01A8FF] rounded-full`}
            onClick={() => selectSigleItemToggle(2)}
          >
            {(theme || openItems) === 2 && (
              <div
                className={` w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-4 mx-auto inset-0    bg-[#01A8FF]  `}
              ></div>
            )}
          </div>
          <h2 onClick={() => toggleItem(2)} className="text-lg font-normal">
            Secured Checkout
          </h2>
        </div>
        {/* stripe logo */}
        <Image
          src={striptLogo}
          alt="paypal"
          width={150}
          height={100}
          className=""
        />
      </div>
      {/* Collapse checkout */}

      <div className={`py-4 ${openItems === 2 ? 'block' : 'hidden'}`}>
        <form action="">
          {/* name and adress */}
          <div className=" lg:flex items-center">
            <Input
              name="firstname"
              type="text"
              label="Frist Name"
              placeholder="Frist Name"
            />
            <Input
              name="address"
              type="text"
              label="Address"
              placeholder="Address"
            />
          </div>
          {/* email */}
          <div className="my-4">
            <Input
              name="Email"
              type="Email"
              label="Email"
              placeholder="Email"
            />
          </div>
          <div className="cart_number my-6  relative items-center flex  w-full h-full">
            <Input
              name="cart number"
              type="text"
              label="Cart Number"
              placeholder="Cart Number"
            />
            <div className="flex  absolute top-1 md:top-0 left-1/2 md:left-[73%] py-2 bg-[#E6ECF4] mt-[33px]">
              <Image src={paypalLogo} alt="paypal" width={50} height={50} />
              <Image src={mastercardLogo} alt="paypal" width={50} height={50} />
              <Image src={amex2Logo} alt="paypal" width={50} height={50} />
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-3 ">
            <Input
              name="postcode"
              type="postcode"
              label="postcode"
              placeholder="postcode"
            />
            <div className="expire mt-[10px]">
              <label
                className="text-base block font-normal text-[#2B2F2F]"
                htmlFor="expire"
              >
                Expire Date
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  name="expire"
                  placeholder="MM"
                  className="bg-[#E6ECF4] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] w-full text-[1em]"
                  required
                />
                <input
                  type="text"
                  name="expire"
                  placeholder="YY"
                  className="bg-[#E6ECF4] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] w-full text-[1em]"
                  required
                />
              </div>
            </div>
            <div className="cart_number my-6 gap-3  relative items-center flex  w-full h-full">
              <Input
                name="cart number"
                type="text"
                label="Cart Number"
                placeholder="Cart Number"
              />
              <div className="flex  absolute top-1 md:top-0 left-[81%] md:left-[73%] py-2 bg-[#E6ECF4] mt-[33px]">
                <Image src={paypalLogo} alt="paypal" width={50} height={50} />
              </div>
            </div>
          </div>
        </form>
        <div>
          <p className="flex items-center gap-2">
            <span className="block text-[1em] font-medium text-[#1F272D]">
              Create Account
            </span>
            <BsFillCheckCircleFill size={20} className="text-[#02BC7D]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
