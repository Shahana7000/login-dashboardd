import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import laptopBg from "../assets/laptop-bg.jpg";

const AuthLayout = () => {
  const location = useLocation();
  const showBackground = location.pathname.startsWith("/user-");

  // FULL SCREEN SPLIT FOR USER FLOW
  if (showBackground) {
    return (
      <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white">
        <Outlet />
      </div>
    );
  }

  // CENTERED CARD FOR ADMIN FLOW
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6 lg:p-12">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center max-w-[1100px] gap-12 lg:gap-24">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;