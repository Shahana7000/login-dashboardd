import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "../assets/image.png";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
      navigate("/otp", { state: { email } }); // ✅ go to OTP page
    }
  };

  const handleBlur = () => {
    setTouched({ email: true });
    setErrors(validate());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 lg:p-12">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img src={logo} alt="SPARKz Logo" className="w-64 sm:w-80 mb-10" />
          <h2 className="text-gray-500 text-3xl sm:text-4xl text-center lg:text-left">
            Forgot your password?
          </h2>
        </div>

        {/* RIGHT */}
        <Card className="w-full lg:w-[460px] border-none shadow-none bg-transparent">
          <div className="bg-[#157395] rounded-xl p-10 sm:p-12 shadow-2xl">

            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-white text-3xl">
                Forgot Password
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* EMAIL */}
                <div>
                  <div className="flex items-center border-b border-white gap-4">
                    <Mail className="text-white" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleBlur}
                      className="bg-transparent border-none text-white"
                    />
                  </div>

                  {touched.email && errors.email && (
                    <p className="text-yellow-300">{errors.email}</p>
                  )}
                </div>

                <Button className="w-full h-14 bg-white text-[#157395] font-bold">
                  SEND OTP
                </Button>

                <div className="text-center">
                  <Link to="/login" className="text-white underline">
                    Back to Login
                  </Link>
                </div>

              </form>
            </CardContent>
          </div>
        </Card>

      </div>
    </div>
  );
}

export default Forget;