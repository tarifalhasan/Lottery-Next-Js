import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import AddToCartBtn from '@/components/ui/AddToCartBtn';

import Spinner from './Spinner';
import Error from '../common/404';

const Campaigns = ({
  bg,
  btnHide,
  headingColor,
  btnBg,
  data,
  slugProduct,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  console.log(data);
  return (
    <div className={`w-full ${bg} `} id="compaigns">
      <div className="main-container pt-20 ">
        <h1
          className={`${headingColor}  text-[1.9em] md:text-[2.8em] font-semibold text-center mb-6`}
        >
          Campaigns Ending Soon
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="card-shoadow bg-[#fff] p-6 rounded-lg"
              >
                <div className=" relative mb-5 flex rounded-lg justify-center">
                  <div className="absolute -top-[25px] -left-4  lg:block">
                    <span className="lg:w-16 lg:h-16 w-16 h-16 mr-8 rounded-full sold-bg flex flex-col justify-center p-3 lg:p-4 items-start </span>">
                      25/
                      <br /> <span className="font-light text-xs">Sold</span>
                    </span>
                    <div className=" w-14 h-14 lg:w-10 lg:h-10 absolute right-0 top-6 rounded-full stock-bg flex flex-col justify-center text-[#464848] text-xs lg:text-base font-bold  ">
                      <div className="flex flex-col space-y-2 justify-center items-center">
                        <span className="font-bold block leading-[5px] text-[8px]">
                          OUT OF
                        </span>
                        <span className="block text-[8px] leading-[5px]">
                          45
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href={`${slugProduct}/${item.slug}`}>
                    <Image
                      src={item.mediaUrl || '/'}
                      alt={item.name}
                      width={200}
                      height={200}
                      className=" object-cover h-28"
                    />
                  </Link>
                </div>
                <div className="flex justify-between mb-5">
                  <Image
                    src="/images/win.svg"
                    alt={item.name}
                    width={25}
                    height={20}
                  />
                  <span className="flex justify-center items-center bg-[#FFEDF4] rounded-full font-semibold text-[0.9em] text-[#FF508F] px-6 py-0.5">
                    Ends Today
                  </span>
                </div>
                <Link
                  href={`${slugProduct}/${item.slug}`}
                  className="text-xl text-[#464848] font-medium mb-4 block"
                >
                  {item.name || 'Unknown Product'}
                </Link>
                <h3 className="text-2xl text-center text-[#464848] font-semibold mb-8">
                  {`$${item.price}` || 'Unknown Product'}
                </h3>
                <div className="flex items-center justify-center ">
                  <AddToCartBtn onClick={() => handleAddToCart(item)} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`flex   item-center pt-7 pb-20 justify-center`}>
          <Link href={'/'} className={`${btnBg} ${btnHide} `}></Link>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
