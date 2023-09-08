import Footer from "./footer";
import Logo from "./logo";
import Navigation from "./navigation";
import CommunitiesFeed from "./communitiesFeed";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-60 z-10">
        <div className="flex flex-col h-full">
          <Logo />
          <div className="flex-1 flex flex-col h-full overflow-auto px-2 py-2.5 pl-4">
            <Navigation />
            <hr className="mr-0 h-[0.09rem] mt-3 mb-5 bg-letters-tertiary/20" />
            <CommunitiesFeed />
            <Footer />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
