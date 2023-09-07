import Intro from "./intro";
import Experience from "./experience";
import Education from "./education";

export default function Index() {
  return (
    <>
      <Intro />
      <hr className="mr-0 h-[0.09rem] mt-3 mb-5 bg-letters-tertiary/20"></hr>
      <Experience />
      <hr className="mr-0 h-[0.09rem] mt-3 mb-5 bg-letters-tertiary/20"></hr>
      <Education />
    </>
  );
}
