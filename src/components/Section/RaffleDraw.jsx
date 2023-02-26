import { useState, useEffect } from 'react';
const RaffleDraw = () => {
  const days = Number(16);

  const [endDate, setEndDate] = useState(new Date()); // Initial end date is the current date
  const [timeLeft, setTimeLeft] = useState({}); // Object to hold the time left in days, hours, minutes, and seconds

  useEffect(() => {
    const newEndDate = new Date();
    newEndDate.setDate(newEndDate.getDate() + days);
    setEndDate(newEndDate);
  }, [days]);

  // Update the time left every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  let day = timeLeft.days;

  if (day < 10) {
    day = `0${day}`;
  }
  let hour = timeLeft.hours;
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = timeLeft.minutes;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = timeLeft.seconds;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto relative  ">
      <div className=" z-40 px-4 sm:px-10 bg-white shadow-lg lg:shadow-2xl rounded-xl py-8">
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-4">
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

            <button className=" hidden lg:flex justify-center w-full max-w-[163px] py-3.5 px-5 rounded-full bg-[#01A8FF] btn-shadow text-white">
              Play Now
            </button>
          </div>
          <div className="lg:col-span-2 mb-5 lg:mb-0">
            <div className="flex justify-center md:justify-start gap-x-3 sm:gap-x-10">
              <div>
                <span className="timer-box">{day}</span>
                <span className="timer-hour">Days</span>
              </div>
              <div>
                <span className="timer-box">{hour}</span>
                <span className="timer-hour">Hours</span>
              </div>
              <div>
                <span className="timer-box">{minutes}</span>
                <span className="timer-hour">Minutes</span>
              </div>
              <div>
                <span className="timer-box">{seconds}</span>
                <span className="timer-hour">Seconds</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className=" lg:hidden flex justify-center px-5 py-3.5 rounded-full bg-[#01A8FF] btn-shadow text-white">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaffleDraw;
