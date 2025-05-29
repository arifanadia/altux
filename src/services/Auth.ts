"use server";

import axiosInstance from "@/lib/axiosInstant";
import { TSignUp } from "@/types";

export const login = async (payload: { email: string; password: string }) => {
  const response = await axiosInstance.post("/auth/login", payload);
  if (!response.data.success) {
    throw new Error(response.data.message || "Login failed.");
  }
  return response.data.data;
};

export const registration = async (payload: TSignUp) => {
  const response = await axiosInstance.post("/auth/signup", payload);
  if (!response.data.success) {
    throw new Error(response.data.message || "Registration failed.");
  }
  return response.data.data;
};

// export const GetVisitorCount = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/visitor`, {
//     cache: "no-store", // Ensures fresh data on each request (SSR)
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch visitor count!");
//   }

//   return res.json();
// };

export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get("/user");
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
export const updateUserRole = async (id: string, role: string) => {
  const payload = {
    id: id,
    role: role,
  };
  console.log("The Update is : ", payload);
  try {
    const res = await axiosInstance.patch(`/user/${id}`, payload);
    return res.data.data;
  } catch (error) {
    throw new Error("Failed to update user role");
  }
};
