

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams(); 

  useEffect(() => {
    if (!id) {
      navigate("/"); 
    }
  }, [id, navigate]);

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
          OTP sent to: {decodeURIComponent(id || "")}
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-white text-xl font-semibold text-center mb-2">
            Enter OTP
          </h3>

          <div className="space-y-6">
            {/* OTP */}
            <div className="flex justify-center">
              <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                <InputOTPGroup className="gap-3">
                  {[0,1,2,3].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="w-12 h-12 text-lg border-gray-300 rounded-lg bg-white text-gray-700"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* TIMER */}
            <div className="text-center">
              <p className="text-white font-semibold text-sm">
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}s
              </p>

              <button
                onClick={handleResend}
                disabled={timer > 0}
                className={`underline ${
                  timer > 0 ? "text-white/40" : "text-white"
                }`}
              >
                Resend
              </button>
            </div>

            {/* VERIFY */}
            <Button
              onClick={() => navigate(`/reset-password/${id}`)}
              className="w-full h-12 bg-white text-[#157395] font-bold"
            >
              Verify
            </Button>

            <Link to="/" className="text-white underline text-sm block text-center">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendOtp;