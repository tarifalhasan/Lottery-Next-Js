import React, { useState } from 'react';
import DesktopImage from '../../../public/images/desktop.jpg';
import Image from 'next/image';
import ShareIcon from '../../../public/images/share.svg';
import LikeIcon from '../../../public/images/like.svg';
import AddToCartBtn from '../ui/AddToCartBtn';

const LiveCampaigns = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-full">
      <div className="main-container pt-20 pb-32">
        <h1 className="text-[#434648] text-[32px] md:text-[48px] font-semibold text-center mb-6">
          Live Campaigns
        </h1>
        <div>
          <div className="mb-14 max-w-md lg:max-w-full mx-auto">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card-shoadow relative  mb-6 grid grid-cols-1 lg:grid-cols-9 gap-5 p-4 rounded-lg"
                >
                  <div className="bg-[#F6F7F9] h-full self-stretch lg:col-span-2 relative mb-5 py-10 px-4 flex rounded-lg justify-center">
                    <Image
                      src={item.pic}
                      alt=""
                      className="w-full object-center"
                    />
                    <div className="absolute top-2 left-0">
                      <Image
                        src="/images/win-gaurantee.svg"
                        alt=""
                        width={40}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className=" order-3 lg:order-2 lg:col-span-3 flex flex-col items-stretch self-stretch justify-between mt-10 lg:mt-0">
                    <span className="text-xl text-[#464848] font-semibold mb-4 lg:mb-8 block">
                      {item.title}
                    </span>
                    <div className="flex justify-between lg:justify-start gap-14 mb-5">
                      <div className="self-center flex">
                        <h3 className="text-2xl text-center text-[#464848] font-semibold  ">
                          {item.price}
                        </h3>
                      </div>
                      <div className="flex  gap-x-3">
                        <button
                          className="text-[#464848] bg-[#F0F0F0]  rounded-full w-8 h-8 flex self-center justify-center items-center"
                          onClick={() => setCounter(counter - 1)}
                        >
                          -
                        </button>
                        <span className="flex self-center text-[#464848] text-lg">
                          {counter}
                        </span>

                        <button
                          className="text-[#464848] bg-[#F0F0F0]  rounded-full w-8 h-8 flex self-center justify-center items-center"
                          onClick={() => setCounter(counter + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row  w-full gap-2">
                      <div className="w-full">
                        <button className="flex w-full px-2 cursor-pointer justify-center border py-2.5 rounded-full">
                          <span>View Details</span>
                        </button>
                      </div>

                      <div className="w-full">
                        <AddToCartBtn />
                      </div>
                    </div>
                  </div>
                  <div className=" order-2 lg:order-3 lg:col-span-4 relative">
                    <div className="absolute right-3 -top-3 lg:top-3 hidden lg:block">
                      <span className="lg:w-24 lg:h-24 w-16 h-16 mr-8 rounded-full sold-bg flex flex-col justify-center p-3 lg:p-4 items-start </span>">
                        25/
                        <br /> <span className="font-light text-xs">Sold</span>
                      </span>
                      <span className=" w-14 h-14 lg:w-20 lg:h-20 absolute right-0 top-6 rounded-full stock-bg flex flex-col justify-center items-center text-[#464848] text-xs lg:text-base font-bold  lg:p-4">
                        <span className="font-light text-[10px] lg:text-xs">
                          OUT OF
                          <br />
                        </span>{' '}
                        45
                      </span>
                    </div>
                    <div className="absolute left-4  -top-3 lg:top-3 block lg:hidden">
                      <span className="lg:w-24 lg:h-24 w-16 h-16 mr-8 rounded-full sold-bg flex flex-col justify-center p-3 lg:p-4 items-start </span>">
                        25/
                        <br /> <span className="font-light text-xs">Sold</span>
                      </span>
                      <span className=" w-14 h-14 lg:w-20 lg:h-20 absolute right-0 top-6 rounded-full stock-bg flex flex-col justify-center items-center text-[#464848] text-xs lg:text-base font-bold  lg:p-4">
                        <span className="font-light text-[10px] lg:text-xs">
                          OUT OF
                          <br />
                        </span>{' '}
                        45
                      </span>
                    </div>
                    <div>
                      <div className=" lg:hidden flex justify-end gap-x-2 mb-5">
                        <div>
                          <Image
                            src={ShareIcon}
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <Image src={LikeIcon} alt="" width={30} height={30} />
                        </div>
                      </div>
                    </div>
                    <div className="flex self-end items-end h-full gap-x-7 ">
                      <div className="border flex justify-between  border-[#01A8FF] rounded-lg px-2 py-1.5">
                        <div className="flex self-center">
                          <span className=" text-[0.850em] font-bold min-w-[120px]">
                            Campaign Ends{' '}
                          </span>
                        </div>
                        <div className="flex gap-x-1 lg:gap-x-2">
                          <span className="compain-end-timer">02</span>
                          <span className="compain-end-timer">02</span>
                          <span className="compain-end-timer">09</span>
                          <span className="compain-end-timer">25</span>
                        </div>
                      </div>
                      <div className=" hidden lg:flex items-end gap-x-2">
                        <div className="min-w-[30px]">
                          <Image
                            src={ShareIcon}
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="min-w-[30px]">
                          <Image src={LikeIcon} alt="" width={30} height={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center w-full max-w-[160px] py-3.5 rounded-full bg-[#01A8FF] btn-shadow text-white">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCampaigns;

const data = [
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
];
