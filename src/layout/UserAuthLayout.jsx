import { Outlet } from "react-router-dom";
import laptopBg from "../assets/image.png";

const UserAuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex overflow-y-auto lg:overflow-hidden relative bg-gray-100">
      {/* BG IMAGE - very low opacity, visible only on outer area */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url(${laptopBg})`,
          opacity: 0.05,
        }}
      />

      {/* Light gray wash (for desktop only or if needed) */}
      <div className="absolute inset-0 bg-gray-100/80 hidden lg:block" />

      {/* CENTERED CARD - full height on mobile, auto-height on desktop card */}
      <div className="relative z-10 w-full flex items-center justify-center p-0 lg:px-6 py-0 lg:py-10">
        <div className="w-full max-w-[920px] min-h-screen lg:min-h-0 lg:h-[85vh] flex flex-col lg:flex-row lg:rounded-2xl overflow-hidden shadow-2xl bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserAuthLayout;