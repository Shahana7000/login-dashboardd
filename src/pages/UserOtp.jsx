import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserLeftPanel from "../components/UserLeftPanel";
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
      {/* LEFT PANEL */}
      <UserLeftPanel
        heading="To keep connected with largest commerce company in the world"
        subheading="We are glad to see you again! Get access to your orders, Wishlist and Recommendation."
      />

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-10 relative bg-white overflow-y-auto">
        <div className="w-full max-w-[320px]">
          <h2 className="text-[#157395] text-[26px] font-bold mb-2">
            Enter OTP
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            OTP sent to:{" "}
            <span className="text-[#157395] font-semibold">
              {decodeURIComponent(id || "")}
            </span>
          </p>

          <div className="space-y-6">
            {/* OTP INPUT */}
            <div className="flex justify-start">
              <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                <InputOTPGroup className="gap-3 sm:gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="w-12 h-12 sm:w-14 sm:h-14 text-xl font-bold rounded-sm border-2 border-gray-300 text-[#157395] focus:border-[#157395] focus:ring-0 transition-all bg-white"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* RESEND */}
            <div className="flex items-center gap-1.5 text-[13px]">
              <span className="text-gray-400 font-medium">
                Didn't receive OTP?
              </span>
              <button
                onClick={handleResend}
                disabled={timer > 0}
                className={cn(
                  "font-bold underline text-[#157395] transition-colors hover:text-[#126280]",
                  timer > 0 && "opacity-50 cursor-not-allowed"
                )}
              >
                {timer > 0 ? `Resend in ${timer}s` : "Resend"}
              </button>
            </div>

            {/* VERIFY BUTTON */}
            <div className="pt-1">
              <Button
                onClick={() => navigate(`/user-reset-password/${id}`)}
                className="h-11 px-14 bg-[#157395] hover:bg-[#126280] text-white font-bold text-[14px] rounded-sm transition-all shadow-md"
              >
                Verify
              </Button>
            </div>

            {/* LINKS */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/user-login"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-colors"
              >
                Back to Login Page
              </Link>
              <Link
                to="/"
                className="text-[#157395] font-bold text-[13px] underline hover:text-[#126280] transition-colors"
              >
                Admin?
              </Link>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-[10px] font-medium mt-8 text-center">
          Copyright @SPARKz 2024. All Right Reserved
        </p>
      </div>
    </>
  );
}

export default UserOtp;