import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Content />
      </div>
    </>
  );
}

export default App;
