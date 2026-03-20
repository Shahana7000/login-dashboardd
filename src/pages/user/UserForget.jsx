import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import UserLeftpanel from '../../components/Auth/UserLeftpanel'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import '../../App.css'

function UserForget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ email: true });
    if (Object.keys(newErrors).length === 0) {
      navigate(`/user-otp/${encodeURIComponent(email)}`);
    }
  };

  const handleBlur = () => {
    setTouched({ email: true });
    setErrors(validate());
  };

  return (
    <>
      {/* LEFT PANEL */}
    

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-10 relative bg-white overflow-y-auto">
        <div className="w-full max-w-[320px]">
          <h2 className="text-[#157395] text-[26px] font-bold mb-2">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Enter your registered email to receive an OTP.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <div
                className={`flex items-center border-b  px-3 py-2 gap-2 bg-white transition-all ${
                  touched.email && errors.email
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-[#157395]"
                }`}
              >
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
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

            {/* SEND OTP BUTTON */}
            <div className="pt-1">
              <Button
                type="submit"
                className="h-11 px-14 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[14px] rounded-sm transition-all shadow-md"
              >
                Send OTP
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

export default UserForget;