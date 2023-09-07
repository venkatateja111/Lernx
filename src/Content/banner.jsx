export default function Banner() {
  return (
    <>
      <div className='h-48 w-full bg-[url("https://as2.ftcdn.net/v2/jpg/05/03/10/57/1000_F_503105756_zp9KPM01OkDA9tenp2BOAhS6whxpwOvS.jpg")]' />
      <div className="absolute edit m-5 p-2 rounded-full bg-white h-fit cursor-pointer right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="black"
          className="w-3 h-3"
        >
          <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
        </svg>
      </div>
    </>
  );
}
