import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Maximize, 
  UserCircle, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import logo from '../assets/image.png';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center gap-4 py-2 sm:py-4">
      {/* Logo for Mobile */}
      <div className="lg:hidden flex items-center gap-2">
        <img src={logo} alt="SPARKZ" className="h-8" />
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
      {/* Fullscreen Icon */}
      <Button 
        variant="outline" 
        size="icon" 
        className="w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-gray-100 text-gray-400"
      >
        <Maximize className="w-5 h-5" />
      </Button>

      {/* Notification */}
      <div className="relative">
        <Button 
          variant="outline" 
          size="icon" 
          className="w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-gray-100 text-gray-400"
        >
          <Bell className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-white focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-none shadow-2xl mt-1">
          <DropdownMenuItem 
            onClick={() => navigate('/profile')}
            className="flex items-center gap-3 py-3 px-3 rounded-lg cursor-pointer text-gray-600 focus:bg-blue-50/50 focus:text-[#157395] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <span className="font-medium text-[13px]">Account Setting</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={handleLogout}
            className="flex items-center gap-3 py-3 px-3 rounded-lg cursor-pointer text-gray-600 focus:bg-red-50/50 focus:text-red-600 mt-1 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
              <LogOut className="w-4 h-4 text-gray-400" />
            </div>
            <span className="font-medium text-[13px]">Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;