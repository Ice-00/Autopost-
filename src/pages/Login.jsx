
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="min-h-screen bg-[#080b14] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#10182a] p-8">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Zap size={32} className="text-blue-500 fill-blue-500" />
          <span className="text-2xl font-bold text-white">AutoPost</span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back 👋
          </h1>
          <p className="mt-2 text-sm text-white/50">
            Sign in to your AutoPost account.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

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
                placeholder="Enter your password"
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

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/70">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Log In
          </button>

        </form>

        {/* Sign Up */}
        <p className="mt-8 text-center text-sm text-white/60">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
