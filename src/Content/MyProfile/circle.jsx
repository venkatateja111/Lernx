import React from "react";

const CircularProgressBar = () => {
  const parts = 10;

  return (
    <div className="relative w-24 h-24 rounded-full bg-gray-300">
      {Array.from({ length: parts }).map((_, index) => (
        <div
          key={index}
          className={`absolute w-full h-full rounded-full ${
            index % 2 === 0 ? "bg-blue-500" : "bg-red-500"
          }`}
          style={{
            clipPath: `polygon(50% 50%, 50% 0%, 0% 0%, 0% 50%, ${
              (index * 100) / parts
            }% 50%)`,
            transform: `rotate(${(index * 360) / parts}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default CircularProgressBar;
