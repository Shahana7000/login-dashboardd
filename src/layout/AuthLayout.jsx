import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/image.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-12 py-8">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-16">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;