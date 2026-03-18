import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthLeftPanel from "../components/AuthLeftPanel";
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
      <AuthLeftPanel
        isUser={true}
        heading="Lorem ipsum dolor sit amet consectetur."
      />

      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 relative h-screen bg-white lg:w-1/2">
        <div className="w-full max-w-[400px]">
          <h3 className="text-2xl font-bold mb-2 text-[#157395]">
            Reset Password?
          </h3>
          <p className="text-xs mb-10 text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-gray-200 focus-within:border-[#157395] pb-1 gap-3 px-0">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-sm placeholder:text-gray-400 focus-visible:ring-0 h-10 px-0 text-gray-900 shadow-none border-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="shrink-0 text-[#157395]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs font-medium">{errors.password}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center border-b border-gray-200 focus-within:border-[#157395] pb-1 gap-3 px-0">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-sm placeholder:text-gray-400 focus-visible:ring-0 h-10 px-0 text-gray-900 shadow-none border-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="shrink-0 text-[#157395]"
                >
                  {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-xs font-medium">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="h-11 px-12 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[15px] rounded transition-all shadow-[0_4px_14px_0_rgba(21,115,149,0.3)]"
              >
                Change
              </Button>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                to="/user-login"
                className="text-[#157395] font-bold underline text-[13px] hover:text-[#126280] transition-colors"
              >
                Back to login page
              </Link>
              <Link
                to="/"
                className="text-[#157395] font-bold text-[13px] hover:underline transition-colors"
              >
                Admin?
              </Link>
            </div>
          </form>
        </div>

        <div className="absolute bottom-6 w-full text-center">
          <p className="text-gray-400 text-[11px] font-medium">
            Copyright @SPARKz 2024. All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default UserResetPassword;
