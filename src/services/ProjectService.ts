"use server";
import axiosInstance from "@/lib/axiosInstant";
import { TProject } from "@/types";
import { revalidatePath } from "next/cache";

export const GetAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Projects Not found !!");
  }
  return res.json();
};

export const GetProject = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`);
  if (!res.ok) {
    throw new Error("Projects Not found");
  }
  return res.json();
};

// Create product
export const CreateProject = async (payload: TProject) => {
  const res = await axiosInstance.post(`/project`, payload);
  if (!res.data.success) {
    throw new Error("Project not created!");
  }

  revalidatePath("/");
  return res.data.success;
};

// Delete product
export const DeleteProject = async (id: string) => {
  const res = await axiosInstance.delete(`/project/${id}`);
  if (!res.data.success) {
    throw new Error("Project not found");
  }

  revalidatePath("/");
  return res.data.success;
};

// Update product
export const UpdateProject = async (id: string, payload: Partial<TProject>) => {
  const res = await axiosInstance.patch(`/project/${id}`, payload);
  if (!res.data.success) {
    throw new Error("Project Not Updated");
  }

  revalidatePath("/");
  return res.data.data;
};
