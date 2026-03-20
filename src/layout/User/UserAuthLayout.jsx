import { Outlet } from "react-router-dom";
import laptopBg from "../../assets/laptop-bg.jpg";
import UserLeftPanel from "@/components/Auth/UserLeftpanel";

const UserAuthLayout = () => {
  return (
    <div className="h-screen w-full flex overflow-y-auto lg:overflow-hidden relative bg-gray-100">
   
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url(${laptopBg})`,
          opacity: 1,
        }}
      />

      
      <div className="absolute inset-0 bg-gray-100/80 hidden lg:block" />

      
      <div className="relative z-10 w-full flex items-center justify-center p-0 lg:px-6 py-0 lg:py-10 h-full">
        <div className="w-full max-w-[920px] h-screen lg:min-h-0 lg:h-[85vh] flex flex-col lg:flex-row lg:rounded-2xl overflow-hidden shadow-2xl bg-white">
        <UserLeftPanel />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserAuthLayout;