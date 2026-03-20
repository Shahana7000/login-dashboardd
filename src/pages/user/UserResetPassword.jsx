import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import UserAuthLayout from "@/layout/User/UserAuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UserResetPassword() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (!id) navigate("/user-login");
  }, [id, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!password.trim()) newErrors.password = "Password is required*";
    else if (password.length < 6)
      newErrors.password = "Minimum 6 characters required*";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm your password*";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ password: true, confirmPassword: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/user-login");
    }
  };

  const handleBlur = () => {
    setTouched({ password: true, confirmPassword: true });
    setErrors(validate());
  };

  return (
    <>
      {/* LEFT PANEL */}
     

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-10 relative bg-white overflow-y-auto">
        <div className="w-full max-w-[320px]">
          <h2 className="text-[#157395] text-[26px] font-bold mb-2">
            Reset Password
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Enter your new password below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NEW PASSWORD */}
            <div className="space-y-1.5">
              <div
                className={`flex items-center border-b  px-3 py-2 gap-2 bg-white transition-all ${
                  touched.password && errors.password
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-[#157395]"
                }`}
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleBlur}
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

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1.5">
              <div
                className={`flex items-center border-b  px-3 py-2 gap-2 bg-white transition-all ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-[#157395]"
                }`}
              >
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-gray-700 text-[13.5px] placeholder:text-gray-400 focus-visible:ring-0 h-9 px-0 flex-1 shadow-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-gray-400 shrink-0 focus:outline-none hover:text-[#157395] transition-colors"
                >
                  {showConfirm ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-xs font-medium">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* CHANGE BUTTON */}
            <div className="pt-1">
              <Button
                type="submit"
                className="h-11 px-14 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[14px] rounded-sm transition-all shadow-md"
              >
                Change
              </Button>
            </div>

            {/* LINKS */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/user-login"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-colors"
              >
                Back to login page
              </Link>
              <Link
                to="/"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-colors"
              >
                Admin?
              </Link>
            </div>
          </form>
        </div>

        <p className="text-gray-400 text-[10px] font-medium mt-8 text-center">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </>
  );
}

export default UserResetPassword;