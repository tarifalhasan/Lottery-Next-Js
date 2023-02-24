import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../../../public/images/hero.svg"
const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="main-container pt-12 md:pt-28 pb-60 md:pb-80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className=" text-[38px] md:text-[42px] leading-[50px] font-bold text-white mb-5">
              Guaranteed Wins £10M+ Prizes Given Out Pursuit Your Dream
            </h1>
            <p className="text-base text-white font-normal mb-7">
              If you take even a few minutes to consider exactly how long a
              meeting should take, you could save critical time on the day of
              millions of years are being intentional the appointment.
            </p>
            <Link href={"/"}>
              <span className="flex justify-center max-w-[216px] bg-white text-[#1F95D5] py-3.5 w-full rounded-full">
                Start Playing
              </span>
            </Link>
          </div>
          <div>
            <Image src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
