import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import AuthLeftPanel from "../components/AuthLeftPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <AuthLeftPanel
        isUser={true}
        heading="Lorem ipsum dolor sit amet consectetur."
      />

      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 relative h-screen bg-white lg:w-1/2">
        <div className="w-full max-w-[400px]">
          <h3 className="text-2xl font-bold mb-2 text-[#157395]">
            Forget Password
          </h3>
          <p className="text-xs mb-10 text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center border-b border-gray-200 focus-within:border-[#157395] pb-1 gap-3">
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-[15px] placeholder:text-gray-400 focus-visible:ring-0 h-10 px-0 shadow-none text-gray-900"
                />
                <Mail className="w-5 h-5 shrink-0 text-[#157395]" />
              </div>

              {touched.email && errors.email && (
                <p className="text-red-500 text-xs font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="h-11 px-12 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[15px] rounded transition-all shadow-[0_4px_14px_0_rgba(21,115,149,0.3)]"
              >
                Send OTP
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

export default UserForget;
