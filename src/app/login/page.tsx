"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Eye, EyeOff, LogIn } from "lucide-react";

import Cookies from "js-cookie";
import Link from "next/link";
import { verifiyToken } from "@/utils/verifyToken";
import { login } from "@/services/Auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      toast.success("Logged in successfully!");
      const { accessToken, refreshToken } = response;

      Cookies.set("accessToken", accessToken, {
        path: "/",
        secure: false,
        expires: 7,
      });
      Cookies.set("refreshToken", refreshToken, {
        path: "/",
        secure: false,
        expires: 7,
      });

      const user = verifiyToken(accessToken);
      Cookies.set(
        "user",
        JSON.stringify({
          email: user?.email,
          role: user?.role,
        })
      );
      window.location.href = "/admin";
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-white to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-xl bg-white/90 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-purple-100/20">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-purple-600 w-24 h-24 rounded-2xl shadow-lg flex items-center justify-center transform rotate-45">
            <LogIn className="w-8 h-8 text-white -rotate-45" />
          </div>
          <div className="space-y-2 text-center mb-8 mt-8">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500">
              Enter your credentials to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="h-11 bg-white/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-11 pr-10 bg-white/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 text-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-purple-600 hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            >
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
