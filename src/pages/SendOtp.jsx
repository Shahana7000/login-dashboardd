import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function SendOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate(); // 

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 lg:p-12">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img src={logo} alt="SPARKz Logo" className="w-64 sm:w-80 mb-10" />
          <h2 className="text-gray-500 text-3xl sm:text-4xl text-center lg:text-left">
            Enter OTP
            <br />
            we’ve sent to your email
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <Card className="w-full lg:w-[460px] border-none shadow-none bg-transparent">
          <div className="bg-[#157395] rounded-xl p-10 sm:p-12 shadow-2xl">

            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-white text-3xl">
                Verify OTP
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">

              {/* OTP INPUT */}
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4} //
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {/* VERIFY BUTTON */}
              <Button
                onClick={() => navigate("/reset-password")}
                className="w-full h-14 bg-white text-[#157395] font-bold"
              >
                VERIFY OTP
              </Button>

              {/* BACK */}
              <div className="text-center">
                <Link
                  to="/forget"
                  className="text-white font-semibold underline"
                >
                  Back
                </Link>
              </div>

            </CardContent>
          </div>

          <CardFooter className="justify-center mt-6">
            <p className="text-[#157395] text-sm">
              Copyright @SPARKz 2024. All Right Reserved
            </p>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}

export default SendOtp;