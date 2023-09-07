import WebsiteLogo from '../assets/img/website-logo.svg'

export default function Logo() {
  return (
    <>
      <div className="h-20 flex items-center px-8">
        <a href="/" className="flex-none">
          <img
            src={WebsiteLogo}
            width={140}
            className="mx-auto"
          />
        </a>
      </div>
    </>
  );
}
