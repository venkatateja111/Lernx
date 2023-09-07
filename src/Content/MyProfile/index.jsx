import OnlineLinks from "./onlineLinks";
import Picture from "./picture";
import ProgressBar from "./progressBar";
import RadioBtn from "./radioBtn";

export default function Index() {
  return (
    <>
      <div className="col-span-2 bg-white">
        <Picture />
        <RadioBtn />
        <OnlineLinks />
        <ProgressBar />
      </div>
    </>
  );
}
