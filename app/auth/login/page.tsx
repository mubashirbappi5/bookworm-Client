import React from "react";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center px-4">
      
     

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-[#fffaf3] px-8 py-10 shadow-sm border border-[#eee7dc]">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl font-semibold text-[#2b1e16]">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue your reading journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-[#2b1e16]">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#e6ded2] bg-transparent py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f5d3f]/30"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm text-[#2b1e16]">
                Password
              </label>
              <button
                type="button"
                className="text-sm text-[#2f5d3f] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#e6ded2] bg-transparent py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f5d3f]/30"
              />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#2f5d3f] py-3 text-sm font-medium text-white hover:bg-[#244a32] transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-[#2f5d3f] font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
