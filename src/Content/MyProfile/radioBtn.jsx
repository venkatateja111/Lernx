import { useState } from "react";

export default function RadioBtn(props) {
  const [toggleValue, setToggleValue] = useState(true);

  return (
    <>
      <div className="flex p-5 justify-evenly">
        <div className="flex flex-col">
          <p className="font-medium">Make my profile visible to employers</p>
          <p className=" text-gray-500 text-sm">
            Your profile and career goods will cppear when employers search our
            dictations for candidates
          </p>
        </div>

        <label htmlFor="toggleB" className="flex align-baseline cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onClick={() => setToggleValue((prev) => !prev)}
            />
            <div
              className={`block  w-16 h-8 rounded-full ${
                toggleValue ? "bg-[rgb(79,70,229)]" : "bg-gray-600"
              }`}
            ></div>
            <div
              className={`dot absolute top-1 bg-white w-6 h-6 rounded-full transition ${
                toggleValue ? "left-[2.25rem]" : "left-1"
              }`}
            ></div>
          </div>
        </label>
      </div>
    </>
  );
}
