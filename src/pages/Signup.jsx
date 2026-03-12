import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import logo from "../assets/image.png";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required*";

    if (!formData.email.trim())
      newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format*";

    if (!formData.password.trim())
      newErrors.password = "Password is required*";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters*";

    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Please confirm password*";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match*";

    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white items-center justify-center p-4 lg:p-12">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <div className="max-w-md flex flex-col items-center lg:items-start">

            <img
              src={logo}
              alt="SPARKz Logo"
              className="w-64 sm:w-80 mb-10"
            />

            <h2 className="text-gray-700 text-3xl sm:text-4xl font-normal leading-tight text-center lg:text-left">
              Create your account
              <br />
              and get started!
            </h2>

          </div>
        </div>

        {/* Right Side Card */}
        <Card className="w-full lg:w-[460px]">

          <CardContent className="p-0">

            <div className="bg-[#157395] rounded-xl shadow-2xl p-10 sm:p-12 animate-in fade-in zoom-in duration-300">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div>
                  <div className="flex items-center border-b border-white pb-3 gap-4">
                    <User className="w-6 h-6 text-white flex-shrink-0" />

                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleChange("fullName", e.target.value)
                      }
                      onBlur={() => handleBlur("fullName")}
                      className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                    />

                  </div>

                  {touched.fullName && errors.fullName && (
                    <p className="text-yellow-300 text-sm font-medium mt-2">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center border-b border-white pb-3 gap-4">

                    <Mail className="w-6 h-6 text-white flex-shrink-0" />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        handleChange("email", e.target.value)
                      }
                      onBlur={() => handleBlur("email")}
                      className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                    />

                  </div>

                  {touched.email && errors.email && (
                    <p className="text-yellow-300 text-sm font-medium mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center border-b border-white pb-3 gap-4">

                    <Lock className="w-6 h-6 text-white flex-shrink-0" />

                    <input
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        handleChange("password", e.target.value)
                      }
                      onBlur={() => handleBlur("password")}
                      className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                    />

                  </div>

                  {touched.password && errors.password && (
                    <p className="text-yellow-300 text-sm font-medium mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="flex items-center border-b border-white pb-3 gap-4">

                    <Lock className="w-6 h-6 text-white flex-shrink-0" />

                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      onBlur={() => handleBlur("confirmPassword")}
                      className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                    />

                  </div>

                  {touched.confirmPassword &&
                    errors.confirmPassword && (
                      <p className="text-yellow-300 text-sm font-medium mt-2">
                        {errors.confirmPassword}
                      </p>
                    )}
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-white text-[#157395] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 active:scale-[0.98] transition-all"
                >
                  SIGN UP
                </button>

                {/* Login Link */}
                <div className="text-center pt-2">
                  <span className="text-white/70 text-base">
                    Already have an account?{" "}
                  </span>

                  <Link
                    to="/"
                    className="text-white text-base font-semibold hover:underline underline"
                  >
                    Login
                  </Link>

                </div>

              </form>

            </div>

          </CardContent>

          <CardFooter className="justify-center mt-12">
            <p className="text-[#157395] text-sm font-medium text-center">
              Copyright @SPARKz 2024. All Rights Reserved
            </p>
          </CardFooter>

        </Card>

      </div>
    </div>
  );
}

export default Signup;