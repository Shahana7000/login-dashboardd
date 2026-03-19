import React from "react";
import logo from "../assets/image.png";
import laptopBg from "../assets/laptop-bg.jpg";

function AuthLeftPanel({ heading, isUser }) {
  if (isUser) {
    return (
      <div 
        className="relative w-full lg:w-1/2 min-h-[400px] lg:h-screen overflow-hidden flex bg-white"
      >
        {/* BASE LAYER: Laptop Background (visible on the left) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-left sm:bg-center" 
          style={{ backgroundImage: `url(${laptopBg})` }}
        />

        {/* OVERLAY COLUMN: Teal Bar pinned to the right */}
        <div className="relative z-10 w-full lg:w-[60%] ml-auto bg-[#157395] flex flex-col justify-center px-10 sm:px-14 py-16">
          {/* Logo inside the teal section */}
          <div className="absolute top-12 left-10 lg:left-14">
            <img src={logo} alt="SPARKz Logo" className="w-32 sm:w-40 brightness-0 invert" />
          </div>
          
          <div className="mt-12">
            <h1 className="text-white text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] mb-8">
              {heading || "Lorem ipsum dolor sit amet consectetur."}
            </h1>
            
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium max-w-[340px]">
              We are glad to see you again! Get access to your orders, Wishlist and Recommendation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[420px] flex flex-col items-center lg:items-start shrink-0">
      <img src={logo} alt="SPARKz Logo" className="w-56 sm:w-64 mb-6" />
      <h2 className="text-gray-500 text-2xl sm:text-[28px] font-normal leading-snug text-center lg:text-left">
        {heading}
      </h2>
    </div>
  );
}

export default AuthLeftPanel;