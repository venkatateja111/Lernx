export default function Footer() {
  return (
    <>
      <div className="absolute w-[14rem] left-0 bottom-0 pr-5 py-3">
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-2xs text-letters-tertiary">
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            About
          </a>
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            Accessibility
          </a>
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            Help
          </a>
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            Privacy &amp; Terms
          </a>
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            Advertise
          </a>
          <a
            className="hover:text-brand-primary hover:underline cursor-pointer"
            // href="/search"
          >
            more
          </a>
        </div>
        <div className="flex justify-center items-center mt-3 text-sm">
          <p className="font-bold text-brand-primary">spehre.io</p>
          <span className="ml-1 text-xs text-letters-tertiary">© 2023</span>
        </div>
      </div>
    </>
  );
}
