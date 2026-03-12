import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Maximize, 
  UserCircle, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (clear auth tokens, etc.)
    navigate('/login');
  };

  return (
    <div className="flex justify-end items-center gap-4 sm:gap-5 pl-12 lg:pl-0">
      {/* Fullscreen Icon */}
      <button className="w-12 h-12 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-blue-50">
        <Maximize className="w-7 h-7 text-gray-500" />
      </button>

      {/* Notification */}
      <div className="relative">
        <button className="w-12 h-12 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-blue-50">
          <Bell className="w-7 h-7 text-gray-500" />
        </button>
        <span className="absolute -top-1 -right-1 text-[10px] bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-medium">
          3
        </span>
      </div>

      {/* Profile */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow border-2 border-white ring-2 ring-blue-50 flex items-center justify-center bg-gray-50"
        >
          <UserCircle className="w-full h-full text-gray-400" />
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
            <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-48 z-20">
              <button className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-gray-700 hover:bg-gray-50 text-sm transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
                Account Setting
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-gray-700 hover:bg-gray-50 text-sm transition-colors"
              >
                <LogOut className="w-5 h-5 text-gray-400" />
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;