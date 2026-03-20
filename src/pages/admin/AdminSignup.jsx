import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLeftPanel from "../../components/Auth/AdminLeftpanel"

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
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required*";
    if (!formData.email.trim()) newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format*";
    if (!formData.password.trim()) newErrors.password = "Password is required*";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 characters*";
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Please confirm password*";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match*";
    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ fullName: true, email: true, password: true, confirmPassword: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <>
     
      

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl shadow-2xl p-8 sm:p-10 overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <User className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.fullName && errors.fullName && (
                <p className="text-yellow-300 text-xs font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.email && errors.email && (
                <p className="text-yellow-300 text-xs font-medium">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Lock className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onBlur={() => handleBlur("password")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.password && errors.password && (
                <p className="text-yellow-300 text-xs font-medium">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Lock className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-yellow-300 text-xs font-medium">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              variant="secondary"
              className="w-full h-12 bg-white text-[#157395] font-bold text-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all mt-2"
            >
              SIGN UP
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-white/70 text-sm">Already have an account? </span>
              <Link to="/" className="text-white text-sm font-semibold hover:underline underline">
                Login
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

export default Signup;