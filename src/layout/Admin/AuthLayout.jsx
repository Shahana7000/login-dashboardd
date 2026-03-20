import AdminLeftPanel from "@/components/Auth/AdminLeftpanel";
import React from "react";
import { Outlet } from "react-router-dom";


const AuthLayout = () => { 
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6 lg:p-12">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center max-w-[1100px] gap-12 lg:gap-24">
      
    <AdminLeftPanel />

  <div className="w-full lg:w-1/2 flex items-center justify-center">
    <Outlet />
  </div>
      </div>
    </div>
  );
};

export default AuthLayout;