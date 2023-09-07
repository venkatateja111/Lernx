export default function Intro() {
  return (
    <div className="flex">
      <p className="p-4 text-gray-500">
        The discovery was made by Richard McClintock, a professor of Latin at
        Hampden-Sydney College in Virginia, who faced the impetuous recurrence
        of the dark word consectetur in the text Lorem ipsum researched its
        origins to identify them in sections 1.10.32 and 1.10.33 of the
        aforementioned
      </p>
      <div className="m-5 p-2 rounded-full bg-[rgb(79,70,229)] h-fit cursor-pointer">
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
  );
}
