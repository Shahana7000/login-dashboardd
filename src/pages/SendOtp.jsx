import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";

import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function SendOtp() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(15);
    setOtp("");
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
            Enter OTP
          </h3>
          <p className="text-white/60 text-xs text-center mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="space-y-6">
            {/* OTP INPUT */}
            <div className="flex justify-center">
              <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                <InputOTPGroup className="gap-3">
                  <InputOTPSlot index={0} className="w-12 h-12 text-lg border-gray-300 rounded-lg bg-white text-gray-700" />
                  <InputOTPSlot index={1} className="w-12 h-12 text-lg border-gray-300 rounded-lg bg-white text-gray-700" />
                  <InputOTPSlot index={2} className="w-12 h-12 text-lg border-gray-300 rounded-lg bg-white text-gray-700" />
                  <InputOTPSlot index={3} className="w-12 h-12 text-lg border-gray-300 rounded-lg bg-white text-gray-700" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Timer & Resend */}
            <div className="text-center space-y-1">
              <p className="text-white font-semibold text-sm">
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}s
              </p>
              <p className="text-white/60 text-xs">
                Didn't received OTP?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`font-bold underline ${
                    timer > 0 ? "text-white/40 cursor-not-allowed" : "text-white"
                  }`}
                >
                  Resend
                </button>
              </p>
            </div>

            {/* VERIFY BUTTON */}
            <Button
              onClick={() => navigate("/reset-password")}
              className="w-full h-12 bg-white text-[#157395] font-bold text-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Verify
            </Button>

            {/* BACK */}
            <div className="text-center">
              <Link to="/" className="text-white font-semibold underline text-sm hover:text-white/90">
                Back to Login Page
              </Link>
            </div>
          </div>
        </div>
        <p className="text-[#157395] text-xs font-medium mt-5 text-center">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </>
  );
}

export default SendOtp;