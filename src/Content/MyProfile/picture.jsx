import Profile from "../../assets/img/profile.png";

export default function Picture(props) {
  return (
    <>
      <div className="shrink-0 flex justify-center align-middle m-auto -mt-16 w-32 h-32 border-2 border-white rounded-full">
        <img src={Profile} className="rounded-full w-32 h-32 object-cover" />
      </div>

      <div className="picture-name flex justify-center flex-col">
        <p className="font-medium text-center">Ayaat Khanna</p>
        <p className="font-medium text-center text-gray-500">UI/UX Designer</p>
      </div>

      <div className="flex justify-evenly">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>

          <p>21 followers</p>
        </div>
        <p>43 following</p>
      </div>
    </>
  );
}
