import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthLeftPanel from "../components/AuthLeftPanel";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

function UserOtp() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) navigate("/user-login");
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
      <AuthLeftPanel
        isUser={true}
        heading="Lorem ipsum dolor sit amet consectetur."
      />

      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 relative h-screen bg-white lg:w-1/2">
        <div className="w-full max-w-[400px]">
          <h3 className="text-2xl font-bold mb-2 text-[#157395]">
            Enter OTP
          </h3>
          <p className="text-xs mb-8 text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="space-y-6">
            <div className="flex justify-start">
              <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                <InputOTPGroup className="gap-3 sm:gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="w-12 h-12 sm:w-14 sm:h-14 text-xl font-bold rounded-lg border-2 border-gray-200 text-[#157395] focus:border-[#157395] focus:ring-0 transition-all bg-white"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex items-center gap-1.5 text-[13px]">
              <span className="font-medium text-gray-400">
                Didn't receive OTP?
              </span>
              <button
                onClick={handleResend}
                disabled={timer > 0}
                className={cn(
                  "font-bold underline text-[#157395]",
                  timer > 0 && "opacity-50 cursor-not-allowed"
                )}
              >
                {timer > 0 ? `Resend in ${timer}s` : "Resend"}
              </button>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => navigate(`/user-reset-password/${id}`)}
                className="h-11 px-12 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[15px] rounded transition-all shadow-[0_4px_14px_0_rgba(21,115,149,0.3)]"
              >
                Verify
              </Button>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                to="/user-login"
                className="text-[#157395] font-bold underline text-[13px] hover:text-[#126280] transition-colors"
              >
                Back to Login Page
              </Link>
              <Link
                to="/"
                className="text-[#157395] font-bold text-[13px] hover:underline transition-colors"
              >
                Admin?
              </Link>
            </div>
          </div>
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

export default UserOtp;
