import React from 'react'

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-end">
      <p className="text-red-600 font-semibold mb-2">{error}</p>
      <div className="flex gap-6">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`h-[72px] w-[72px] grid place-items-center text-2xl font-bold border border-black cursor-pointer ${
              selectedNumber === value
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-xl font-bold mt-2">Select Number</p>
    </div>
  );
};

export default NumberSelector;
