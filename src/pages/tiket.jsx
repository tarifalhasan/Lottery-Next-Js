import { useState } from 'react';

const RandomNumberGenerator = () => {
  // Define the list of available numbers
  const numbers = Array.from({ length: 49 }, (_, i) => i + 1);

  // Create state to track which buttons are open
  const [isOpen, setIsOpen] = useState(Array(49).fill(false));

  // Create a function to select a number
  const selectNumber = number => {
    // Toggle the state of the button
    setIsOpen(prev => {
      const newIsOpen = [...prev];
      newIsOpen[number - 1] = !newIsOpen[number - 1];
      return newIsOpen;
    });
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {numbers.map(number => (
        <button
          key={number}
          className={` text-[#434648] text-xs border border-[#01A8FF80] w-[35px] h-[35px] text-center rounded-full block font-medium ${
            isOpen[number - 1] ? 'bg-[#01FF0B]' : 'bg-transparent'
          }`}
          onClick={() => selectNumber(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default RandomNumberGenerator;
