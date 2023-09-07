import React from "react";
import LogoIcons from "./logo-icons";

export default function OnlineLinks(props) {
  return (
    <>
      <div className="flex p-5 justify-between items-start">
        <div className="flex flex-col">
          <p className="font-medium">Online Links</p>
          <p className="text-gray-500 text-sm">
            Add your online portfolio link to increase your profile strength
          </p>
        </div>
        <div className="add p-2 rounded-full bg-[rgb(79,70,229)] h-fit cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <LogoIcons />
    </>
  );
}
