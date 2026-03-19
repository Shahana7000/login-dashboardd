import logo from "../assets/image1.png"; // apna logo path update karna

function UserLeftPanel({ heading, subheading }) {
  return (
    <div className="w-full lg:w-[42%] shrink-0 bg-[#157395] flex flex-col p-8 sm:p-10 lg:p-12">
      {/* Logo top */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="SPARKz Logo"
          className="w-12 h-12 object-contain"
        />
        <span className="text-white font-bold text-lg tracking-wide">
          SPARKZ
        </span>
      </div>

      {/* Heading + subheading - thoda neeche logo se, upar se */}
      <div className="mt-10">
        <h1 className="text-white font-bold text-2xl sm:text-[1.75rem] leading-snug max-w-[260px]">
          {heading}
        </h1>
        {subheading && (
          <p className="text-white/70 text-xs mt-4 max-w-[240px] leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserLeftPanel;