import React from "react";
import CircularProgressBar from "./circle";

export default function ProgressBar(props) {
  return (
    <>
      <div className=" p-4 m-4 bg-slate-100">
        <div className="flex justify-center">
          <p className="mr-1">Wheel of opportunities</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="rgba(0,0,0,0.5)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <br />
        {/* <CircularProgressBar progress={"25"} /> */}
      </div>
    </>
  );
}
