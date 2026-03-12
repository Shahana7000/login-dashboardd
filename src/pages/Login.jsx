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

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/image.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required*';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format*';
    if (!password.trim()) newErrors.password = 'Password is required*';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ email: true, password: true });
    if (Object.keys(newErrors).length === 0) {
      navigate('/dashboard');
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  return (
    <div className="flex min-h-screen w-full bg-white items-center justify-center p-4 lg:p-12">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <div className="max-w-md flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="SPARKz Logo"
              className="w-64 sm:w-80 mb-10"
            />
            <h2 className="text-gray-700 text-3xl sm:text-4xl font-normal leading-tight text-center lg:text-left">
              Welcome, we are glad to<br />see you again!
            </h2>
          </div>
        </div>

        {/* Right Side Login Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full max-w-[460px] bg-[#157395] rounded-xl shadow-2xl p-10 sm:p-12 animate-in fade-in zoom-in duration-300">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Email Field */}
              <div>
                <div className="flex items-center border-b border-white pb-3 gap-4">
                  <Mail className="w-6 h-6 text-white flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="text-yellow-300 text-sm font-medium mt-2">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center border-b border-white pb-3 gap-4">
                  <Lock className="w-6 h-6 text-white flex-shrink-0" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    className="w-full bg-transparent text-white placeholder-white/70 text-lg outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>

                </div>

                {touched.password && errors.password && (
                  <p className="text-yellow-300 text-sm font-medium mt-2">{errors.password}</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 accent-white rounded border-white bg-transparent"
                  />
                  <span className="text-white text-base">Remember me</span>
                </label>

                <button
                  type="button"
                  className="text-white text-base font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-4 mt-2 bg-white text-[#157395] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 active:scale-[0.98] transition-all"
              >
                SIGN IN
              </button>

              {/* User Link */}
              <div className="text-center pt-2">
                <Link
                  to="/signup"
                  className="text-white text-base font-semibold hover:underline underline"
                >
                  User?
                </Link>
              </div>

            </form>
          </div>

          {/* Copyright */}
          <p className="mt-12 text-[#157395] text-sm font-medium text-center">
            Copyright @SPARKz 2024. All Right Reaserved
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;