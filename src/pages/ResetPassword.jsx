import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/image.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!password.trim()) newErrors.password = "Password is required*";
    else if (password.length < 6) newErrors.password = "Minimum 6 characters required*";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password*";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ password: true, confirmPassword: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/");
    }
  };

  const handleBlur = () => {
    setTouched({ password: true, confirmPassword: true });
    setErrors(validate());
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center lg:items-start shrink-0">
        <img src={logo} alt="SPARKz Logo" className="w-56 sm:w-64 mb-6" />
        <h2 className="text-gray-500 text-2xl sm:text-[28px] font-normal leading-snug text-center lg:text-left">
          Lorem ipsum dolor sit
          <br />
          amet consectetur.
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-white text-xl font-semibold text-center mb-2">
            Reset Password?
          </h3>
          <p className="text-white/60 text-xs text-center mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center bg-white/10 rounded-lg px-3 gap-3">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/50 focus-visible:ring-0 h-11 px-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/70 hover:bg-white/10 hover:text-white shrink-0 h-8 w-8"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {touched.password && errors.password && (
                <p className="text-yellow-300 text-xs font-medium">{errors.password}</p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center bg-white/10 rounded-lg px-3 gap-3">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/50 focus-visible:ring-0 h-11 px-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-white/70 hover:bg-white/10 hover:text-white shrink-0 h-8 w-8"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-yellow-300 text-xs font-medium">{errors.confirmPassword}</p>
              )}
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              className="w-full h-12 bg-white/30 hover:bg-white/40 text-white font-bold text-sm rounded-lg transition-all"
            >
              Change
            </Button>

            <div className="text-center">
              <Link to="/" className="text-white font-semibold underline text-sm hover:text-white/90">
                Back to Login Page
              </Link>
            </div>
          </form>
        </div>
        <p className="text-[#157395] text-xs font-medium mt-5 text-center">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </>
  );
}

export default ResetPassword;