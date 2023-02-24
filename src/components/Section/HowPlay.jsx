import React from 'react';
import PurchaseTicketIcon from '../../../public/images/ticket.svg';
import SundayIcon from '../../../public/images/sunday.svg';
import ResultIcon from '../../../public/images/result.svg';
import PrizeIcon from '../../../public/images/prize.svg';
import Image from 'next/image';
const HowPlay = () => {
  return (
    <section className="main-container py-8 md:py-24">
      <h1 className="text-center font-bold text-[#434648] text-[32px] md:text-[48px] mb-6 md:mb-20">
        How to Play
      </h1>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-4 gap-10 pt-10">
        <div className="">
          <div className="flex justify-center mb-6">
            <Image src={PurchaseTicketIcon} alt="" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="flex justify-center px-4 rounded-md py-2.5 play-box border border-[#01A8FF] text-lg font-medium">
              01
            </span>
          </div>
          <div>
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Purchase <span className="text-[#00FF85]">Ticket</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              Purchase one or more raffle tickets to enter the competition.
            </p>
          </div>
        </div>
        <div className="md:-mt-[41px]">
          <div className="mb-4">
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Wait for <span className="text-[#00FF85]">Sunday</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              Once {`you've`} bought your tickets, wait for the raffle draw date
              to find out if {`you've`} won.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <span className="flex justify-center px-4 rounded-md py-2.5 play-box border border-[#01A8FF] text-lg font-medium">
              02
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <Image src={SundayIcon} alt="" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-center mb-6">
            <Image src={ResultIcon} alt="" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="flex justify-center px-4 rounded-md py-2.5 play-box border border-[#01A8FF] text-lg font-medium">
              03
            </span>
          </div>
          <div className="">
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Check the <span className="text-[#00FF85]">Results</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              The winning numbers or names will be announced by the raffle Live
            </p>
          </div>
        </div>
        <div className="md:-mt-[25px]">
          <div className="mb-6">
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Claim <span className="text-[#00FF85]">Your</span>Prize
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              {`  If you're one of the lucky winners, we will get in touch with
                you`}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <span className="flex justify-center px-4 rounded-md py-2.5  border border-[#01A8FF] text-lg font-medium">
              04
            </span>
          </div>
          <div className="flex justify-center mb-6">
            <Image src={PrizeIcon} alt="" />
          </div>
        </div>
      </div>
      <div className=" md:hidden grid grid-cols-1 md:grid-cols-4 gap-28">
        <div className="vertical-line">
          <div className="flex justify-center mb-6">
            <Image src={PurchaseTicketIcon} alt="" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="flex justify-center px-4 rounded-md py-2.5  border border-[#01A8FF] text-lg font-medium">
              01
            </span>
          </div>
          <div>
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Purchase <span className="text-[#00FF85]">Ticket</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              Purchase one or more raffle tickets to enter the competition.
            </p>
          </div>
        </div>
        <div className="vertical-line">
          <div className="flex justify-center mb-4">
            <Image src={SundayIcon} alt="" />
          </div>
          <div className="flex justify-center mb-6">
            <span className="flex justify-center px-4 rounded-md py-2.5  border border-[#01A8FF] text-lg font-medium">
              02
            </span>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Wait for <span className="text-[#00FF85]">Sunday</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              Once {`you've`} bought your tickets, wait for the raffle draw date
              to find out if {`you've`} won.
            </p>
          </div>
        </div>
        <div className="vertical-line">
          <div className="flex justify-center mb-6">
            <Image src={ResultIcon} alt="" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="flex justify-center px-4 rounded-md py-2.5  border border-[#01A8FF] text-lg font-medium">
              03
            </span>
          </div>
          <div>
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Check the <span className="text-[#00FF85]">Results</span>
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              The winning numbers or names will be announced by the raffle Live
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-6">
            <span className="flex justify-center px-4 rounded-md py-2.5  border border-[#01A8FF] text-lg font-medium">
              04
            </span>
          </div>
          <div className="flex justify-center mb-6">
            <Image src={PrizeIcon} alt="" />
          </div>
          <div className="mb-6">
            <h2 className="text-2xl text-center font-medium text-[#434648] mb-1">
              Claim <span className="text-[#00FF85]">Your</span>Prize
            </h2>
            <p className="text-[#434648] text-base font-normal text-center">
              {`  If you're one of the lucky winners, we will get in touch with
                you`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowPlay;
