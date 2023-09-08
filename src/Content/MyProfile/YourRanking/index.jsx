import React from "react";

export default function Index(props) {
  const ranking = "27";
  return (
    <>
      <div className="p-5 flex flex-col">
        <p className="font-medium">Your Ranking</p>
        <br />
        <div className="relative pt-1">
          <div className="flex items-center bg-gray-200 h-4 rounded-full">
            <div
              style={{
                width: `${100 - ranking}%`,
                background:
                  "linear-gradient(270deg, rgba(139,58,238,1) 33%, rgba(87,55,160,1) 63%)",
              }}
              className="overflow-hidden h-4 text-xs flex w-full rounded-full"
            ></div>
            <div className="rounded-full bg-purple-600 -ml-4 w-6 h-6"></div>
          </div>
          <p className="text-center mt-2">
            <span className="text-gray-500 text-sm">Hurrah! You are in the top </span>
            <span className="font-medium text-[#5e5e5e]">{ranking}%</span>
          </p>
        </div>
      </div>
    </>
  );
}
