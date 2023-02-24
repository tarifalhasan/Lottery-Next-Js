import React from 'react';
import TicketIcon from '../../../public/images/tickets.svg';
import SupportIcon from '../../../public/images/support.svg';
import JackPotIcon from '../../../public/images/jackpot.svg';
import Image from 'next/image';
const WhyChooseUs = () => {
  return (
    <div className="main-container py-12 text-center" id="why_us">
      <h1 className=" font-bold text-[#434648] text-[2.000em] md:text-[3.000em] mb-10">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center mb-5">
                <Image src={item.icon} alt={item.title} />
              </div>
              <h3 className="text-center text-2xl text-[#464848] font-bold mb-2 ">
                {item.title}
              </h3>
              <p className=" text-base md:text-lg font-normal text-[#434648] ">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;

const data = [
  {
    title: 'Limited Tickets',
    description:
      'We limit the number of tickets, ensuring high chances of winning and making our raffle an attractive choice for customers. By limiting the number of tickets, you increase the odds of each ticket winning.',
    icon: TicketIcon,
  },
  {
    title: 'Support Good Cause',
    description:
      'We have pledged 10% of the profits to a charity. Which our customers choose in a monthly poll.',
    icon: SupportIcon,
  },
  {
    title: 'Biggest Lottery Jackpot',
    description:
      'Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took & scrambled it make.',
    icon: JackPotIcon,
  },
];
