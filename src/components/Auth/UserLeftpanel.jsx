import logo from "../../assets/sparxz.png"; 

function UserLeftPanel() {
  return (
    <div className="w-full h-screen lg:w-[42%] shrink-0 bg-[#157395] flex flex-col p-8 sm:p-10 lg:p-12 ">
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
         To keep
         <br/>
          connected
          <br/>
          with largest
          <br/>
          commerce
          <br/>
           company in
           <br/>
           the world
        </h1>
        {/* {subheading && ( */}
          <p className="text-white/70 text-xs mt-4 max-w-[240px] leading-relaxed">
            We are glad to see you again!
            <br/>
             Get access to your orders,
             <br/>
              Wishlist and Recommendation.
          </p>
        {/* )} */}
      </div>
    </div>
  );
}

export default UserLeftPanel;