import Image from "next/image";
import googlePlayImage from "../../../public/images/gogle.svg";
import appStore from "../../../public/images/app.svg";

const Banner = () => {
  return (
    <div className="w-full">
      <div>
        <div className="w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-[50%] bg-[#0038FF] px-4 py-14">
            <h2 className="text-center text-white font-semibold text-[30px] md:text-[40px] leading-[50px] mb-8 max-w-[445px] mx-auto">
              Says hello to our latest mobile app
            </h2>
            <div className="flex justify-center gap-x-3">
              <a href="#">
                <Image src={googlePlayImage} alt="" />
              </a>
              <a href="#">
                <Image src={appStore} alt="" />
              </a>
            </div>
          </div>
          <div className=" w-full md:w-[50%] bg-[#FFA500] px-4 py-14">
            <h2 className="text-center text-white font-semibold text-[30px] md:text-[40px] leading-[50px] mb-8 max-w-[445px] mx-auto">
              Says hello to our latest mobile app
            </h2>
            <div className="flex justify-center gap-x-3">
              <button className="text-white font-bold py-4 rounded-lg w-full flex justify-center max-w-[200px] border border-white">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
