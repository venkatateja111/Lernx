export default function CommunitiesFeed() {
  const feeds = [
    {
      href: "/",
      name: "Indonesia UI Designer",
      members: "734",
      icon: "https://cdn4.vectorstock.com/i/1000x1000/16/48/young-man-listening-to-music-on-headphones-vector-31341648.jpg",
    },
    {
      href: "/",
      name: "Indonesia UX Researcher",
      members: "125",
      icon: "https://cdn-icons-png.flaticon.com/512/8649/8649595.png",
    },
    {
      href: "/",
      name: "Prototyping Club",
      members: "891",
      icon: "https://cdn5.vectorstock.com/i/1000x1000/48/89/man-character-avatar-in-flat-design-vector-10834889.jpg",
    },
    {
      href: "/",
      name: "Indonesia UI Designer",
      members: "241",
      icon: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
    },
  ];

  return (
    <>
      <nav className="flex flex-col">
        <h4 className="grow text-lg">Communities feed</h4>
        {/* <br /> */}
        {feeds.map((item, idx) => (
          <a
            key={idx}
            // href={item.href}
            className="overflow-hidden rounded-md text-sm text-letters-tertiary fot-semibold my-1"
          >
            <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
              <div className="shrink-0 flex items-center justify-center w-8 h-8">
                <img src={item.icon} className="rounded-full" />
              </div>
              <div className="grow flex flex-wrap flex-col items-baseline">
                <p className="grow whitespace-nowrap font-medium">
                  {item.name}
                </p>
                <p className="grow whitespace-nowrap">{item.members} members</p>
              </div>
            </div>
          </a>
        ))}

        <div className="flex justify-center items-center">
          <p className="text-center cursor-pointer text-brand-primary">
            show 5 more
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="rgb(79,70,229)"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}
