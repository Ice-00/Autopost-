
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, ArrowLeft, CheckCircle } from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080b14] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#10182a] p-8">

        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <Zap size={30} className="fill-blue-500 text-blue-500" />
          <span className="text-2xl font-bold text-white">AutoPost</span>
        </div>

        {submitted ? (
          /* Success Message */
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle size={32} className="text-green-400" />
            </div>

            <h1 className="text-2xl font-bold text-white">
              Check your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/50">
              If an account exists with {email}, you'll receive
              instructions to reset your password.
            </p>

            <Link
              to="/login"
              className="mt-7 inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <>
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white">
                Forgot password?
              </h1>

              <p className="mt-3 text-sm leading-6 text-white/50">
                No worries! Enter your email address and we'll
                send you instructions to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080b14] px-3">
                  <Mail size={18} className="text-white/40" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Send Reset Instructions
              </button>
            </form>
          </>
        )}

        {/* Back to Login */}
        {!submitted && (
          <Link
            to="/login"
            className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
