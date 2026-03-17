import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";
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

function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!password.trim()) newErrors.password = "Password is required*";
    else if (password.length < 6)
      newErrors.password = "Minimum 6 characters required*";

    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm your password*";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match*";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ password: true, confirmPassword: true });

    if (Object.keys(newErrors).length === 0) {
      navigate("/login"); 
    }
  };

  const handleBlur = () => {
    setTouched({ password: true, confirmPassword: true });
    setErrors(validate());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 lg:p-12">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img src={logo} alt="SPARKz Logo" className="w-64 sm:w-80 mb-10" />
          <h2 className="text-gray-500 text-3xl sm:text-4xl text-center lg:text-left">
            Create a new password
          </h2>
        </div>

        {/* RIGHT */}
        <Card className="w-full lg:w-[460px] border-none shadow-none bg-transparent">
          <div className="bg-[#157395] rounded-xl p-10 sm:p-12 shadow-2xl">

            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-white text-3xl">
                Reset Password
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* PASSWORD */}
                <div>
                  <div className="flex items-center border-b border-white gap-4">
                    <Lock className="text-white" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handleBlur}
                      className="bg-transparent border-none text-white"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-white"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                  {touched.password && errors.password && (
                    <p className="text-yellow-300">{errors.password}</p>
                  )}
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <div className="flex items-center border-b border-white gap-4">
                    <Lock className="text-white" />
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={handleBlur}
                      className="bg-transparent border-none text-white"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-white"
                    >
                      {showConfirm ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="text-yellow-300">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <Button className="w-full h-14 bg-white text-[#157395] font-bold">
                  RESET PASSWORD
                </Button>

                <div className="text-center">
                  <Link to="/login" className="text-white underline">
                    Back to Login
                  </Link>
                </div>

              </form>
            </CardContent>
          </div>

          <CardFooter className="justify-center mt-6 p-0">
            <p className="text-[#157395] text-sm">
              Copyright @SPARKz 2024
            </p>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}

export default ResetPassword;