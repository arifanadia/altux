"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registration } from "@/services/Auth";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        throw new Error("Please fill in all fields");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const registrationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
      await registration(registrationData);
      toast.success("Registration successful!");
      navigate.push("/login");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Registration failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-white to-blue-50 p-4">
      <div className="w-full max-w-md mt-12">
        <div className="relative backdrop-blur-xl bg-white/90 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-purple-100/20">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-purple-600 w-24 h-24 rounded-2xl shadow-lg flex items-center justify-center transform rotate-45">
            <UserPlus className="w-8 h-8 text-white -rotate-45" />
          </div>
          <div className="space-y-2 text-center mb-8 mt-8">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-sm text-gray-500">
              Sign up to get started with your new account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name.."
                value={formData.name}
                onChange={handleInputChange}
                className="h-11 bg-white/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 text-black"
                required
              />
            </div>
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
              <Label htmlFor="phone" className="text-gray-700">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="01...."
                value={formData.phone}
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
                  placeholder="Create a password"
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="h-11 pr-10 bg-white/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 text-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? (
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
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
