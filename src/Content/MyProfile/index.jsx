import OnlineLinks from "./onlineLinks";
import Picture from "./picture";
import WheelOfOpportunities from "./wheelOfOpportunities";
import RadioBtn from "./radioBtn";

export default function Index() {
  return (
    <>
      <div className="col-span-2 bg-white">
        <Picture />
        <RadioBtn />
        <OnlineLinks />
        <WheelOfOpportunities />
      </div>
    </>
  );
}
