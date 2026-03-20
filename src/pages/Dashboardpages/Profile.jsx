import React, { useState } from "react";
import { Camera, Edit3, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="bg-[#F0F3F8] flex flex-col h-full overflow-y-auto pb-10">
      <h1 className="text-[#157395] text-xl font-semibold mt-4 mb-6">Profile</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Card - User Info */}
        <div className="bg-white rounded-xl p-8 flex flex-col items-center w-full lg:w-[320px] shadow-sm">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#157395]/10">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#157395] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white hover:bg-[#126280] transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <h2 className="text-[#157395] text-xl font-bold mb-1">Nalini Sharma</h2>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Nalini@globussoft.in</span>
            <button className="text-[#157395] hover:bg-gray-50 p-1 rounded transition-colors">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Card - Form Details */}
        <div className="bg-white rounded-xl p-8 flex-1 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">First Name*</label>
              <Input 
                value="Nalini" 
                readOnly 
                className="bg-gray-50/50 border-gray-200 h-11 focus-visible:ring-[#157395]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Last Name*</label>
              <Input 
                value="Sharma" 
                readOnly 
                className="bg-gray-50/50 border-gray-200 h-11 focus-visible:ring-[#157395]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              className="text-[#157395] border-[#157395] hover:bg-[#157395] hover:text-white font-semibold px-6 h-11 transition-all"
            >
              Change Password
            </Button>
            
            {!isChangingPassword && (
              <Button className="bg-[#157395] hover:bg-[#126280] text-white font-bold px-10 h-11 shadow-lg shadow-[#157395]/20">
                Save
              </Button>
            )}
          </div>

          {/* Change Password Expansion */}
          {isChangingPassword && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Enter Old Password</label>
                  <div className="relative">
                    <Input
                      type={showOldPassword ? "text" : "password"}
                      placeholder="Enter Old Password"
                      className="bg-gray-50/50 border-gray-200 h-11 pr-10 focus-visible:ring-[#157395]"
                    />
                    <button
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#157395]"
                    >
                      {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Enter New Password</label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter New Password"
                      className="bg-gray-50/50 border-gray-200 h-11 pr-10 focus-visible:ring-[#157395]"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#157395]"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsChangingPassword(false)}
                  className="bg-[#157395]/10 border-none text-[#157395] hover:bg-[#157395]/20 font-bold px-8 h-11"
                >
                  Discard
                </Button>
                <Button className="bg-[#157395] hover:bg-[#126280] text-white font-bold px-10 h-11 shadow-lg shadow-[#157395]/20">
                  Update
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
