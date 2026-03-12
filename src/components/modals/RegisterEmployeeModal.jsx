import React, { useState } from 'react';
import { Camera, Pencil, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterEmployeeModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto p-0 gap-0 border-none shadow-2xl rounded-2xl">
        {/* Customized Header */}
        <div className="relative h-16 sm:h-20 flex items-center justify-center border-b border-gray-100 px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:bg-transparent"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-xl font-semibold text-gray-700">
            Register Employee
          </h2>
        </div>

        <div className="p-6 sm:px-12 sm:pb-12 sm:pt-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="w-24 h-24 bg-[#eef6f9] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#157395]/5 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#157395]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md border border-gray-50 flex items-center justify-center">
                  <Camera className="w-3.5 h-3.5 text-gray-500" />
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1.5 mt-3 text-sm font-medium text-gray-500 hover:text-[#157395] transition-colors">
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* First Name */}
              <div className="space-y-1.5">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-600">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter First Name"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-1.5">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-600">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-600">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter Phone Number"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-gray-600">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email ID"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-sm font-medium text-gray-600">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 pr-11 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-600">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-Enter Password"
                    className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 pr-11 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Roles */}
              <div className="space-y-1.5">
                <Label htmlFor="roles" className="text-sm font-medium text-gray-600">Roles</Label>
                <Input
                  id="roles"
                  placeholder="Enter Roles"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>

              {/* Employee Code */}
              <div className="space-y-1.5">
                <Label htmlFor="empCode" className="text-sm font-medium text-gray-600">Employee Code</Label>
                <Input
                  id="empCode"
                  placeholder="Enter Employee Code"
                  className="bg-[#F0F3F8] border-none h-12 rounded-lg px-4 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#157395]/20"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6">
              <Button
                type="button"
                onClick={onClose}
                className="w-full bg-[#157395] h-12 text-white font-semibold rounded-lg hover:bg-[#126280] shadow-md shadow-[#157395]/20 transition-all active:scale-[0.98]"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterEmployeeModal;