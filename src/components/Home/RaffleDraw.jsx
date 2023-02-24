const RaffleDraw = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto relative mb-60 md:mb-80  lg:mb-40 ">
      <div className="absolute -top-40 z-40 inset-x-4 px-4 sm:px-10 bg-white shadow-lg lg:shadow-2xl rounded-xl py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-[#434648] text-center md:text-left text-4xl font-semibold mb-4">
              Raffle Draw
            </h2>
            <p className="text-sm text-center md:text-left font-medium text-[#434648] mb-5">
              Every <span className="text-[#00FF85]">Sunday</span> There is a
              <span className="text-[#00FF85]">
                Raffle DrawGuaranteed Winners
              </span>
            </p>

            <button className=" hidden lg:flex justify-center w-full max-w-[163px] py-3.5 rounded-full bg-[#01A8FF] btn-shadow text-white">
              Play Now
            </button>
          </div>
          <div className="lg:col-span-2 mb-5 lg:mb-0">
            <div className="flex justify-center md:justify-start gap-x-3 sm:gap-x-10">
              <div>
                <span className="timer-box">01</span>
                <span className="timer-hour">Days</span>
              </div>
              <div>
                <span className="timer-box">01</span>
                <span className="timer-hour">Hours</span>
              </div>
              <div>
                <span className="timer-box">01</span>
                <span className="timer-hour">Minutes</span>
              </div>
              <div>
                <span className="timer-box">01</span>
                <span className="timer-hour">Seconds</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className=" lg:hidden flex justify-center w-full max-w-[163px] py-3.5 rounded-full bg-[#01A8FF] btn-shadow text-white">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaffleDraw;
