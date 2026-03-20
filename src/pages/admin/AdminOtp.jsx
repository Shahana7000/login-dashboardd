

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import AdminLeftPanel from "@/components/Auth/AdminLeftpanel";

function SendOtp() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) navigate("/");
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
      

      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2 text-white text-center">
            Enter OTP
          </h3>
          <p className="text-xs mb-8 text-white/60 text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="space-y-8">
            <div className="flex justify-center">
              <InputOTP maxLength={4} value={otp} onChange={setOtp} className="focus:outline-none">
                <InputOTPGroup className="gap-3 sm:gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i} 
                    className="w-12 h-12 sm:w-14 sm:h-14 text-xl font-bold rounded-lg 
                    bg-[#157395] text-white border border-white/30
                    focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                    data-[active=true]:ring-0 data-[active=true]:ring-offset-0 data-[active=true]:border-white"
                            />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-white/70">Didn't receive OTP?</span>
              <button
                onClick={handleResend}
                disabled={timer > 0}
                className={cn(
                  "font-bold underline text-white",
                  timer > 0 && "opacity-50 cursor-not-allowed"
                )}
              >
                {timer > 0 ? `Resend in ${timer}s` : "Resend"}
              </button>
            </div>

            <Button
              onClick={() => navigate(`/reset-password/${id}`)}
              className="w-full h-12 font-bold text-sm  bg-white text-[#157395] transition-all rounded-lg"
            >
              Verify
            </Button>

            <div className="text-center mt-6">
              <Link
                to="/"
                className="text-white font-semibold underline text-sm hover:text-white/90"
              >
                Back to Login Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendOtp;