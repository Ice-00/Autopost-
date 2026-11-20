
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, User, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b14] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#10182a] p-8">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Zap size={30} className="text-blue-500 fill-blue-500" />
          <span className="text-2xl font-bold text-white">AutoPost</span>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-white">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-white/50">
            Join AutoPost and start automating your content.
          </p>
        </div>

        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm text-white/80">
              Full Name
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080b14] px-3">
              <User size={18} className="text-white/40" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-white/80">
              Email Address
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080b14] px-3">
              <Mail size={18} className="text-white/40" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-white/80">
              Password
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080b14] px-3">
              <Lock size={18} className="text-white/40" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-white/40 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm text-white/80">
              Confirm Password
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080b14] px-3">
              <Lock size={18} className="text-white/40" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-white/40 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
