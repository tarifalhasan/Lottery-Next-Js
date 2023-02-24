import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ title, description, featureImage }) => {
  return (
    <div className="hero-gradient pt-12">
      <div className="main-container pb-20  ">
        <div className="flex flex-col gap-y-8 lg:flex-row justify-between items-center gap-x-6">
          <div className="basis-[50%]">
            <h1 className=" text-[38px] md:text-[42px] leading-[50px] font-bold text-white mb-5">
              {title}
            </h1>
            <p className="text-base text-white font-normal mb-7">
              {description}
            </p>
            <Link href={'/'}>
              <span className="flex justify-center max-w-[216px] bg-white text-[#1F95D5] py-3.5 w-full rounded-full">
                Start Playing
              </span>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image src={featureImage} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
