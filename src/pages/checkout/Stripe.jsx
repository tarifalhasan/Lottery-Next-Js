import striptLogo from '@/../public/images/stripe_gateway.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Input from '@/components/ui/Input';
import Image from 'next/image';
const Stripe = ({ theme, openItems, toggleItem }) => {
  return (
    <div className="bg-[#F5F7FA] p-6 rounded-md">
      <div
        onClick={() => toggleItem(2)}
        className="flex justify-between cursor-pointer items-center "
      >
        <div className="flex items-center gap-x-2">
          <div
            className={`w-6 relative  cursor-pointer h-6 border border-solid border-[#01A8FF] rounded-full`}
          >
            <div
              className={` w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-4 mx-auto inset-0 ${
                theme === 2 ? 'bg-[#01A8FF]' : 'bg-transparent'
              } `}
            ></div>
          </div>
          <h2 className="text-lg font-normal">Secured Checkout</h2>
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
          <div className=" lg:flex gap-4 gap-y-4 items-center">
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
          <Input name="Email" type="Email" label="Email" placeholder="Email" />
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
