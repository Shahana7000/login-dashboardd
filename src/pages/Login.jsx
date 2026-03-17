// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock } from 'lucide-react';
// import logo from '../assets/image.png';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!email.trim()) newErrors.email = 'Email is required*';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format*';
//     if (!password.trim()) newErrors.password = 'Password is required*';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     setErrors(newErrors);
//     setTouched({ email: true, password: true });
//     if (Object.keys(newErrors).length === 0) {
//       navigate('/dashboard');
//     }
//   };

//   const handleBlur = (field) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     setErrors(validate());
//   };

//   return (
//     <div className="flex min-h-screen w-full bg-white items-center justify-center p-6 lg:p-12">
//       <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24">
//         {/* Left Side - Logo & Welcome */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
//           <div className="max-w-md flex flex-col items-center lg:items-start">
//             <img
//               src={logo}
//               alt="SPARKz Logo"
//               className="w-64 sm:w-80 mb-10"
//             />
//             <h2 className="text-gray-500 text-3xl sm:text-4xl font-normal leading-tight text-center lg:text-left">
//               Welcome, we are glad to<br />see you again!
//             </h2>
//           </div>
//         </div>

//         {/* Right Side - Login Card */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
//           <div className="w-full max-w-[460px] bg-[#157395] rounded-xl shadow-2xl p-10 sm:p-12 animate-in fade-in zoom-in duration-300">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Email Field */}
//               <div>
//                 <div className="flex items-center border-b border-white pb-3 gap-4">
//                   <Mail className="w-6 h-6 text-white flex-shrink-0" />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onBlur={() => handleBlur('email')}
//                     className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
//                   />
//                 </div>
//                 {touched.email && errors.email && (
//                   <p className="text-yellow-300 text-sm font-medium mt-2">{errors.email}</p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <div className="flex items-center border-b border-white pb-3 gap-4">
//                   <Lock className="w-6 h-6 text-white flex-shrink-0" />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onBlur={() => handleBlur('password')}
//                     className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
//                   />
//                 </div>
//                 {touched.password && errors.password && (
//                   <p className="text-yellow-300 text-sm font-medium mt-2">{errors.password}</p>
//                 )}
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-5 h-5 accent-white rounded border-white bg-transparent"
//                   />
//                   <span className="text-white text-base">Remember me</span>
//                 </label>
//                 <button type="button" className="text-white text-base font-semibold hover:underline">
//                   Forgot Password?
//                 </button>
//               </div>

//               {/* Sign In Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 mt-2 bg-white text-[#157395] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 active:scale-[0.98] transition-all"
//               >
//                 SIGN IN
//               </button>

//               {/* User? Link */}
//               <div className="text-center pt-2">
//                 <Link
//                   to="/signup"
//                   className="text-white text-base font-semibold hover:underline underline"
//                 >
//                   User?
//                 </Link>
//               </div>
//             </form>
//           </div>

//           {/* Copyright */}
//           <p className="mt-12 text-[#157395] text-sm font-medium text-center">
//             Copyright @SPARKz 2024. All Right Reaserved
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-white p-6 lg:p-12 ">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img src={logo} alt="SPARKz Logo" className="w-64 sm:w-80 mb-10" />
          <h2 className="text-gray-500 text-3xl sm:text-4xl font-normal leading-tight text-center lg:text-left">
            Welcome, we are glad to
            <br />
            see you again!
          </h2>
        </div>

        {/* RIGHT SIDE CARD */}
        <Card className="w-full lg:w-[460px] border-none shadow-none bg-transparent">
          <div className="bg-[#157395] rounded-xl p-10 sm:p-12 shadow-2xl overflow-hidden">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-white text-3xl font-medium">
                Login
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* EMAIL */}
                <div className="space-y-2">
                  <div className="flex items-center border-b border-white pb-1 gap-4">
                    <Mail className="w-6 h-6 text-white shrink-0" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className="bg-transparent border-none text-white text-lg placeholder:text-white/70 focus-visible:ring-0 h-10 px-0"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-yellow-300 text-sm font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                  <div className="flex items-center border-b border-white pb-1 gap-4">
                    <Lock className="w-6 h-6 text-white shrink-0" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur("password")}
                      className="bg-transparent border-none text-white text-lg placeholder:text-white/70 focus-visible:ring-0 h-10 px-0"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-white hover:bg-white/10 hover:text-white shrink-0"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  {touched.password && errors.password && (
                    <p className="text-yellow-300 text-sm font-medium">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* REMEMBER ME & FORGOT PASSWORD */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="rememberMe"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked)}
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#157395] w-5 h-5 rounded"
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-white text-base font-normal cursor-pointer"
                    >
                      Remember me
                    </Label>
                  </div>

                  <Button
                    variant="link"
                    type="button"
                    className="text-white font-semibold hover:no-underline p-0 h-auto text-base"
                  >
                    Forgot Password?
                  </Button>
                </div>

                {/* LOGIN BUTTON */}
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full h-14 bg-white text-[#157395] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all"
                >
                  SIGN IN
                </Button>

                {/* SIGNUP LINK */}
                <div className="text-center">
                  <Link
                    to="/signup"
                    className="text-white font-semibold underline text-base hover:text-white/90"
                  >
                    User?
                  </Link>
                </div>
              </form>
            </CardContent>
          </div>

          <CardFooter className="justify-center mt-6 p-0">
            <p className="text-[#157395] text-sm font-medium">
              Copyright @SPARKz 2024. All Right Reserved
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;