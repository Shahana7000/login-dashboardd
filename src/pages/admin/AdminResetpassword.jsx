// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import AuthLeftPanel from "../../components/AuthLeftPanel"

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// // import { cn } from "@/lib/utils";

// function AdminResetpassword() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   useEffect(() => {
//     if (!id) navigate("/");
//   }, [id, navigate]);

//   const validate = () => {
//     const newErrors = {};
//     if (!password.trim()) newErrors.password = "Password is required*";
//     else if (password.length < 6)
//       newErrors.password = "Minimum 6 characters required*";

//     if (!confirmPassword.trim())
//       newErrors.confirmPassword = "Confirm your password*";
//     else if (password !== confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match*";

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     setErrors(newErrors);
//     setTouched({ password: true, confirmPassword: true });

//     if (Object.keys(newErrors).length === 0) {
//       navigate("/");
//     }
//   };

//   const handleBlur = () => {
//     setTouched({ password: true, confirmPassword: true });
//     setErrors(validate());
//   };

//   return (
//     <>
//       <AuthLeftPanel
//         heading={
//           <>
//             Lorem ipsum dolor sit
//             <br />
//             amet consectetur.
//           </>
//         }
//       />

//       <div className="w-full lg:w-[420px] flex flex-col items-center">
//         <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
//           <h3 className="text-2xl font-bold mb-2 text-white text-center">
//             Reset Password?
//           </h3>
//           <p className="text-xs mb-10 text-white/60 text-center">
//             Lorem ipsum dolor sit amet consectetur.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="space-y-1.5">
//               <div className="flex items-center bg-white/10 rounded-lg px-3 gap-3">
//                 <Input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter new password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onBlur={handleBlur}
//                   className="bg-transparent border-none text-sm text-white placeholder:text-white/50 focus-visible:ring-0 h-10 px-0"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="shrink-0"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5 text-white/70" />
//                   ) : (
//                     <Eye className="w-5 h-5 text-white/70" />
//                   )}
//                 </button>
//               </div>
//               {touched.password && errors.password && (
//                 <p className="text-red-500 text-xs font-medium">{errors.password}</p>
//               )}
//             </div>

//             <div className="space-y-1.5">
//               <div className="flex items-center bg-white/10 rounded-lg px-3 gap-3">
//                 <Input
//                   type={showConfirm ? "text" : "password"}
//                   placeholder="Confirm password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onBlur={handleBlur}
//                   className="bg-transparent border-none text-sm text-white placeholder:text-white/50 focus-visible:ring-0 h-10 px-0"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirm(!showConfirm)}
//                   className="shrink-0"
//                 >
//                   {showConfirm ? (
//                     <EyeOff className="w-5 h-5 text-white/70" />
//                   ) : (
//                     <Eye className="w-5 h-5 text-white/70" />
//                   )}
//                 </button>
//               </div>
//               {touched.confirmPassword && errors.confirmPassword && (
//                 <p className="text-red-500 text-xs font-medium">{errors.confirmPassword}</p>
//               )}
//             </div>

//             <Button
//               type="submit"
//               className="w-full h-12 font-bold text-sm rounded bg-white/30 hover:bg-white/40 text-white transition-all"
//             >
//               Change
//             </Button>

//             <div className="text-center mt-6">
//               <Link
//                 to="/"
//                 className="text-white font-semibold underline text-sm hover:text-white/90"
//               >
//                 Back to login page
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminResetpassword;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function AdminResetpassword() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (!id) navigate("/");
  }, [id, navigate]);

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
      navigate("/");
    }
  };

  const handleBlur = () => {
    setTouched({ password: true, confirmPassword: true });
    setErrors(validate());
  };

  return (
    <>
     
      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2 text-white text-center">
            Reset Password?
          </h3>
          <p className="text-xs mb-10 text-white/60 text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NEW PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Lock className="w-5 h-5 text-white shrink-0" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleBlur}
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

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Lock className="w-5 h-5 text-white shrink-0" />
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-white text-sm placeholder:text-white/70 focus-visible:ring-0 h-9 px-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-white hover:bg-white/10 hover:text-white shrink-0 h-8 w-8"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-yellow-300 text-xs font-medium">{errors.confirmPassword}</p>
              )}
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              variant="secondary"
              className="w-full h-12 bg-white text-[#157395] font-bold text-sm rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Change
            </Button>

            <div className="text-center">
              <Link
                to="/"
                className="text-white font-semibold underline text-sm hover:text-white/90"
              >
                Back to login page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminResetpassword;