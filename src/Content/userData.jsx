import { useState } from "react";
import About from "./About";

export default function UserData() {
  const tabItems = ["About", "Skills & Certificates", "Posts", "Spaces"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="col-span-4 px-4 bg-white m-2">
      <ul
        role="tablist"
        className="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm justify-between"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem == idx
                ? "border-indigo-600 text-black"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem == idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2.5 px-4 rounded-lg duration-150 hover:text-black hover:bg-gray-50 active:bg-gray-100 font-medium"
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <About />
    </div>
  );
}
