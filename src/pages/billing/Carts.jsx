import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill, BsCircle, BsPlus } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { billingInfo } from '@/components/data/data';
const Carts = () => {
  const [openItems, setOpenItems] = useState({});
  const [theme, setTheme] = useState({});

  const toggleItem = index => {
    setOpenItems({ ...openItems, [index]: !openItems[index] });
    setTheme({ ...theme, [index]: !theme[index] });
  };
  return (
    <>
      {billingInfo.carts.map((cart, index) => (
        <div
          key={index}
          onClick={() => toggleItem(index)}
          className={`flex border-2 gap-3 justify-between rounded-md 'border-lightGray'  
                  ${theme[index] ? 'border-[#01A8FF]' : 'border-[ #A1A8AE80]'}
                  }  py-1 px-2  cursor-pointer w-full`}
        >
          <div className="flex  items-start gap-4 m-2 ">
            <div className="card_Img basis-[12%] w-[60px] flex items-center justify-center h-[30px]  py-4 border border-border">
              <Image
                src={cart.image}
                alt="add to cart"
                width={100}
                height={50}
                className="max-w-[60px]"
              />
            </div>
            <div className={`card_detail `}>
              <h3 className="text-[0.999em] md:text-[1.3em] text-[#1F272D]">
                {cart.name}
              </h3>
              <span className="text-base text-[#1F272DB2]">{cart.Expire}</span>
              <div>
                <button className="flex gap-2 cursor-pointer items-center justify-between">
                  <span className="text-base text-[#1F272DB2]">
                    Set as default
                  </span>
                  <span className="bg-[#A1A8AE1A]  flex items-center px-2 py-1 rounded-md">
                    <CiEdit />
                    Edit
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex mt-3 justify-end">
              {theme[index] ? (
                <BsFillCheckCircleFill
                  size={24}
                  className={`text-[#01A8FF] 
                        `}
                />
              ) : (
                <BsCircle size={24} className="text-[#9AA4AD]" />
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex py-3 justify-end md:justify-center lg:justify-start">
        <button className="add_new_cart_btn px-6 py-3 flex items-center justify-center">
          <BsPlus size={20} />
          Add New Card
        </button>
      </div>
    </>
  );
};

export default Carts;
