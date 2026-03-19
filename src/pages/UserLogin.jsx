import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Eye, EyeOff } from "lucide-react";
import UserLeftPanel from "../components/UserLeftPanel";
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
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format*";
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
    <>
      {/* LEFT PANEL */}
      <UserLeftPanel
        heading="To keep connected with largest commerce company in the world"
        subheading="We are glad to see you again! Get access to your orders, Wishlist and Recommendation."
      />

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-10 relative bg-white overflow-y-auto">
        <div className="w-full max-w-[320px]">
          <h2 className="text-[#157395] text-[26px] font-bold mb-8">
            Log In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <div
                className={`flex items-center border rounded-sm px-3 py-2 gap-2 bg-white transition-all ${
                  touched.email && errors.email
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-[#157395]"
                }`}
              >
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="bg-transparent border-none text-gray-700 text-[13.5px] placeholder:text-gray-400 focus-visible:ring-0 h-9 px-0 flex-1 shadow-none"
                />
                <Mail className="w-[18px] h-[18px] text-[#157395] shrink-0" />
              </div>
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <div
                className={`flex items-center border rounded-sm px-3 py-2 gap-2 bg-white transition-all ${
                  touched.password && errors.password
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-[#157395]"
                }`}
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  className="bg-transparent border-none text-gray-700 text-[13.5px] placeholder:text-gray-400 focus-visible:ring-0 h-9 px-0 flex-1 shadow-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 shrink-0 focus:outline-none hover:text-[#157395] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER ME & FORGOT */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="userRememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  className="border-gray-400 data-[state=checked]:bg-[#157395] data-[state=checked]:border-[#157395] w-4 h-4 rounded-none transition-all"
                />
                <Label
                  htmlFor="userRememberMe"
                  className="text-gray-500 text-[13px] font-medium cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <Link
                to="/user-forget"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-all"
              >
                Forgot Password?
              </Link>
            </div>

            {/* LOG IN BUTTON */}
            <div className="pt-1">
              <Button
                type="submit"
                className="h-11 px-14 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[14px] rounded-sm transition-all shadow-md"
              >
                Log In
              </Button>
            </div>

            {/* ADMIN LINK */}
            <div className="pt-1">
              <Link
                to="/"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-colors"
              >
                Admin?
              </Link>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-[10px] font-medium mt-8 text-center">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </>
  );
}

export default UserLogin;