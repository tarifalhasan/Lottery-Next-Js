import React from "react";
import WhyChooseUs from "./WhyChooseUs";

const Winners = () => {
  return (
    <div className="winner-bg ">
      <div className="main-container pt-20 pb-28">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
          Winners
        </h1>
        <div className="overflow-x-auto mb-40">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E1F5FF]">
                <th className="th-heading">Prize</th>
                <th className="th-heading">RRP</th>
                <th className="th-heading">Price</th>
                <th className="th-heading">Time to Draw</th>
                <th className="th-heading">Winner</th>
                <th className="th-heading">Play</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="td-data">{item.prize} </td>
                    <td className="td-data">{item.rrp}</td>
                    <td className="td-data">{item.price}</td>
                    <td className="td-data">{item.time}</td>
                    <td className="td-data border-l">{item.winner}</td>
                    <td className="td-data border-l">
                      <button
                        className={`${
                          item.play === "Buy Ticket"
                            ? "bg-[#13D34B]"
                            : "bg-[#0075FF] cursor-not-allowed"
                        } flex justify-center max-w-[160px] w-full px-2  py-3 rounded-full  btn-shadow text-white`}
                      >
                        {item.play}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

export default Winners;

const tableData = [
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Sold Out",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Buy Ticket",
  },
  {
    prize: "United State Powerball",
    rrp: "$54,000,00 ",
    price: "$50",
    time: "00:02:00",
    winner: "Jacob Smith",
    play: "Sold Out",
  },
];
