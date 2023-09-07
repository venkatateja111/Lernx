import Banner from "./banner";
import MyProfile from "./MyProfile";
import UserData from "./userData";

export default function Index() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Banner />
        <div className="grid grid-cols-6 gap-3 bg-slate-300 ml-60">
          <MyProfile />
          <UserData />
        </div>
      </div>
    </>
  );
}
