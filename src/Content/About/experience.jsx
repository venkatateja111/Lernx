import React from "react";

export default function Experience(props) {
  return (
    <>
      <h3 className="font-medium">Experience</h3>
      <div className="flex items-center">
        <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
          <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(79,70,229)"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          </div>
          <div className="grow">
            <p className="whitespace-nowrap font-medium">
              Crisis Intervention Specialist{" "}
            </p>
            <p className="text-gray-600">January 2023-Present</p>
            <p className="text-gray-500">lcoderz-Ahmedabad</p>
          </div>
        </div>

        <div className="icons flex flex-row">
          <div className="add m-5 p-2 rounded-full bg-[rgb(79,70,229)] h-fit cursor-pointer">
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

          <div className="edit m-5 p-2 rounded-full bg-[rgb(79,70,229)] h-fit cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="w-3 h-3"
            >
              <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
            </svg>
          </div>
        </div>
      </div>
      <br />
      <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
        <div className="shrink-0 flex items-center justify-center w-8 h-8"></div>
        <div className="grow">
          <p className="mr-28">
            Work with clients and web studios as freelancer. Work in next areas:
            eCommerce web projects; creative landing pages; iOS and Android
            apps; corporate web sites and corporate identity sometimes.
          </p>
        </div>
      </div>
    </>
  );
}
