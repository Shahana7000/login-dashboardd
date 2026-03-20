import React from "react";
import logo from '../../assets/image.png';


function AdminLeftPanel() {
  return (
    <div className="w-full lg:w-[420px] flex flex-col items-center lg:items-start shrink-0 hidden lg:flex md:flex">
      <img src={logo} alt="SPARKz Logo" className="w-56 sm:w-64 mb-6" />
      <h2 className="text-gray-500 text-2xl sm:text-[28px] font-normal leading-snug text-center lg:text-left">
        Lorem ipsum dolor sit
            <br />
            amet consectetur.
      </h2>
    </div>
  );
}

export default AdminLeftPanel;