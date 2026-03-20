import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
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
      navigate(`/otp/${encodeURIComponent(email)}`);
    }
  };

  const handleBlur = () => {
    setTouched({ email: true });
    setErrors(validate());
  };

  return (
    <>
     

      <div className="w-full lg:w-[420px] flex flex-col items-center">
        <div className="w-full bg-[#157395] rounded-xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2 text-white text-center">
            Forget Password
          </h3>
          <p className="text-xs mb-10 text-white/60 text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-1.5">
              <div className="flex items-center border-b border-white/80 pb-1 gap-3">
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                  className="bg-transparent border-none text-sm text-white placeholder:text-white/70 focus-visible:ring-0 h-9 px-0 shadow-none"
                />
                <Mail className="w-5 h-5 shrink-0 text-white" />
              </div>

              {touched.email && errors.email && (
                <p className="text-red-500 text-xs font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 font-bold text-sm rounded-lg bg-white text-[#157395] transition-all shadow-[0_4px_14px_0_rgba(21,115,149,0.3)]"
            >
              Send OTP
            </Button>

            <div className="text-center mt-6">
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

export default Forget;