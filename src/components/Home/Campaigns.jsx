import React from "react";
import DesktopImage from "../../../public/images/desktop.jpg";
import Image from "next/image";

const Campaigns = () => {
  return (
    <div className="w-full">
      <div className="main-container pt-20 pb-32">
        <h1 className="text-[#434648] text-[32px] md:text-[48px] font-semibold text-center mb-6">
          Campaigns Ending Soon
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="card-shoadow p-4 rounded-lg">
                <div className="bg-[#F6F7F9] mb-5 p-4 flex rounded-lg justify-center">
                  <Image src={item.pic} alt="" />
                </div>
                <div className="flex justify-between mb-5">
                  <Image src="/images/win.svg" alt="" width={25} height={20} />
                  <span className="flex justify-center items-center bg-[#FFEDF4] rounded-full text-xs text-[#FF508F] px-6 py-0.5">
                    Ends Today
                  </span>
                </div>
                <span className="text-xl text-[#464848] font-medium mb-4 block">
                  {item.title}
                </span>
                <h3 className="text-2xl text-center text-[#464848] font-semibold mb-8">
                  {item.price}
                </h3>
                <div className="flex w-full cursor-pointer justify-center bg-[#01FF0B] py-2.5 rounded-full">
                  <button>
                    <span className="flex gap-x-2 w-full">
                      <Image
                        src="/images/cart.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>{item.buttonTitle}</span>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

const data = [
  {
    title: "Apple macbook pro m2",
    price: "$65.35",
    buttonTitle: "Add to Cart",
    pic: DesktopImage,
  },
  {
    title: "Apple macbook pro m2",
    price: "$65.35",
    buttonTitle: "Add to Cart",
    pic: DesktopImage,
  },
  {
    title: "Apple macbook pro m2",
    price: "$65.35",
    buttonTitle: "Add to Cart",
    pic: DesktopImage,
  },
  {
    title: "Apple macbook pro m2",
    price: "$65.35",
    buttonTitle: "Add to Cart",
    pic: DesktopImage,
  },
];
