import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "../assets/image.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required*";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format*";
    if (!password.trim()) newErrors.password = "Password is required*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ email: true, password: true });
    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center lg:items-start shrink-0">
        <img src={logo} alt="SPARKz Logo" className="w-56 sm:w-64 mb-6" />
        <h2 className="text-gray-500 text-2xl sm:text-[28px] font-normal leading-snug text-center lg:text-left">
          Welcome, we are glad to
          <br />
          see you again!
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
              </div>
              {touched.email && errors.email && (
                <p className="text-yellow-300 text-xs font-medium">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Lock className="w-5 h-5 text-white shrink-0" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white hover:bg-white/10 hover:text-white shrink-0 h-8 w-8"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {touched.password && errors.password && (
                <p className="text-yellow-300 text-xs font-medium">{errors.password}</p>
              )}
            </div>

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#157395] w-4 h-4 rounded"
                />
                <Label htmlFor="rememberMe" className="text-white text-sm font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link to="/forget" className="text-white font-semibold hover:no-underline text-sm">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              variant="secondary"
              className="w-full h-12 bg-white text-[#157395] font-bold text-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              SIGN IN
            </Button>

            {/* SIGNUP LINK */}
            <div className="text-center">
              <Link to="/user-login" className="text-white font-semibold underline text-sm hover:text-white/90">
                User?
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

export default Login;