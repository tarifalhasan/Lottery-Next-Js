import Image from 'next/image';
import ShareIcon from '../../../public/images/share.svg';
import LikeIcon from '../../../public/images/like.svg';
import AddToCartBtn from '../ui/AddToCartBtn';
import Link from 'next/link';
import NumberOfProduct from '../ui/NumberOfProduct';

import CampaignEnds from '../ui/CampaignEnds';

const LiveCampaigns = ({ paddingTop, data, slugProduct }) => {
  return (
    <div className={`w-full pb-10 ${paddingTop}`}>
      <div className="main-container ">
        <h1 className="text-[#434648] text-[32px] md:text-[48px] font-semibold text-center mb-6">
          Live Campaigns
        </h1>
        <div>
          <div className="mb-14 max-w-md lg:max-w-full mx-auto">
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card-shoadow relative  mb-6 grid grid-cols-1 lg:grid-cols-9 gap-5 p-4 rounded-lg"
                >
                  <div className="bg-[#F6F7F9] h-full self-stretch lg:col-span-2 relative mb-5 py-10 px-4 flex rounded-lg justify-center">
                    <Link href={`${slugProduct}/${item.slug}`}>
                      <Image
                        src={item.productImage.src}
                        alt={item.title}
                        className="w-full object-center"
                        width={200}
                        height={200}
                      />
                    </Link>
                    <div className="absolute top-2 left-0">
                      <Image
                        src="/images/win-gaurantee.svg"
                        alt={item.title}
                        width={40}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className=" order-3 lg:order-2 pt-10 lg:col-span-3 flex flex-col items-stretch self-stretch justify-between mt-10 lg:mt-0">
                    <span className="text-xl text-[#464848] font-semibold mb-4 lg:mb-8 block">
                      <Link href={`${slugProduct}/${item.slug}`}>
                        {item.title}
                      </Link>
                    </span>
                    {/* coute prosuct price */}
                    <NumberOfProduct price={item.price} />
                    <div className="flex flex-row  w-full gap-2">
                      <div className="w-full">
                        <button className="flex w-full px-2 cursor-pointer justify-center border py-2.5 rounded-full">
                          <Link href={`${slugProduct}/${item.slug}`}>
                            View Details
                          </Link>
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
                        </span>
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
                        </span>
                        45
                      </span>
                    </div>
                    <div>
                      <div className=" lg:hidden flex justify-end gap-x-2 mb-5">
                        <div>
                          <Image
                            src={ShareIcon}
                            alt={item.title}
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
                      {/* Combain coute down  */}
                      <CampaignEnds daysToAdd={item?.campaignEndDate} />
                      <div className=" hidden lg:flex items-end gap-x-2">
                        <div className="min-w-[30px]">
                          <Image
                            src={ShareIcon}
                            alt={item.title}
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="min-w-[30px]">
                          <Image
                            src={LikeIcon}
                            alt={item.title}
                            width={30}
                            height={30}
                          />
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
