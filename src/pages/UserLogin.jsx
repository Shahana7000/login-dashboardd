import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Eye, EyeOff } from "lucide-react";
import logo from "../assets/image.png";
import laptopBg from "../assets/laptop-bg.jpg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function UserLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format*";
    if (!password.trim()) newErrors.password = "Password is required*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ email: true, password: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* LEFT PANEL - Teal with background image */}
      <div className="relative w-full lg:w-[38%] min-h-[350px] lg:min-h-screen bg-[#157395] flex flex-col justify-center px-8 sm:px-10 lg:px-14 py-12 z-10">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
          style={{ backgroundImage: `url(${laptopBg})` }}
        />

        {/* Angled right edge */}
        <div className="hidden lg:block absolute top-0 -right-[60px] w-[120px] h-full bg-white z-20"
          style={{ 
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0% 50%)',
          }}
        />

        <div className="relative z-10">
          <img src={logo} alt="SPARKz Logo" className="w-44 sm:w-52 mb-12 brightness-0 invert" />
          
          <h1 className="text-white text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.2] mb-10">
            To keep<br />
            connected<br />
            with largest<br />
            commerce<br />
            company in<br />
            the world
          </h1>
          
          <p className="text-white/60 text-xs leading-relaxed max-w-[240px]">
            We are glad to see you again! Get access to your orders, Wishlist and Recommendation.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL - White form area */}
      <div className="relative w-full lg:w-[62%] flex flex-col items-start justify-center px-8 sm:px-12 lg:px-20 xl:px-28 py-12 bg-white">
        {/* Subtle background image on the right edge */}
        <div
          className="absolute top-0 right-0 w-[40%] h-full bg-cover bg-right opacity-[0.06] hidden lg:block pointer-events-none"
          style={{ backgroundImage: `url(${laptopBg})` }}
        />

        <div className="relative z-10 w-full max-w-[380px]">
          {/* Log In heading */}
          <h2 className="text-[#157395] text-2xl font-semibold mb-10">Log In</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* EMAIL */}
            <div className="space-y-1">
              <div className="flex items-center border-b border-gray-300 pb-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="bg-transparent border-none text-gray-600 text-[13px] placeholder:text-gray-400 focus-visible:ring-0 h-8 px-0 flex-1"
                />
                <Mail className="w-[18px] h-[18px] text-[#157395] shrink-0 ml-3" />
              </div>
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <div className="flex items-center border-b border-gray-300 pb-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  className="bg-transparent border-none text-gray-600 text-[13px] placeholder:text-gray-400 focus-visible:ring-0 h-8 px-0 flex-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#157395] shrink-0 ml-3"
                >
                  {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            {/* REMEMBER ME & FORGOT */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="userRememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  className="border-gray-400 data-[state=checked]:bg-[#157395] data-[state=checked]:border-[#157395] w-3.5 h-3.5 rounded-sm"
                />
                <Label htmlFor="userRememberMe" className="text-gray-500 text-xs font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link to="/forget" className="text-[#157395] font-medium text-xs hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* LOG IN BUTTON */}
            <div>
              <Button
                type="submit"
                className="h-10 px-10 bg-[#157395] hover:bg-[#126280] text-white font-semibold text-sm rounded-md shadow-md transition-all"
              >
                Log In
              </Button>
            </div>

            {/* ADMIN LINK */}
            <div>
              <Link to="/" className="text-[#157395] font-medium underline text-sm hover:text-[#126280]">
                Admin?
              </Link>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <p className="absolute bottom-5 left-0 right-0 text-center text-[#157395] text-[11px] font-medium">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
