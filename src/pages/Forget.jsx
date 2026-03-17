import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "../assets/image.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Forget() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ email: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/otp", { state: { email } });
    }
  };

  const handleBlur = () => {
    setTouched({ email: true });
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
            Forgot Password?
          </h3>
          <p className="text-white/60 text-xs text-center mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.email && errors.email && (
                <p className="text-yellow-300 text-xs font-medium">{errors.email}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white/30 hover:bg-white/40 text-white font-bold text-sm rounded-lg transition-all"
            >
              Send OTP
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

export default Forget;