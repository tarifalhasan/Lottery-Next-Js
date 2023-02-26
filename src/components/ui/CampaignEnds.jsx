import { useState, useEffect } from 'react';

const CampaignEnds = ({ daysToAdd }) => {
  const days = Number(daysToAdd);

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
    <>
      <div className="border  flex justify-between items-center border-[#01A8FF] rounded-lg px-2 py-1.5">
        <div className=" min-w-[120px]">
          <h4 className=" text-[1em] font-medium ">Campaign Ends</h4>
        </div>

        <div className="flex gap-x-1 lg:gap-x-2">
          <span className="compain-end-timer">{day}</span>
          <span className="compain-end-timer">{hour}</span>
          <span className="compain-end-timer">{minutes}</span>
          <span className="compain-end-timer"> {seconds}</span>
        </div>
      </div>
    </>
  );
};

export default CampaignEnds;
