"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { TProject } from "@/types";
import { useProjects } from "@/Hooks/useProjects";
import ProjectForm from "@/components/projects/ProjectForm";

export default function CreateProjectPage() {
  const router = useRouter();
  const { useCreateProject } = useProjects();
  const createProject = useCreateProject();

  const handleSubmit = async (data: TProject) => {
    try {
      await createProject.mutateAsync(data);
      router.push("/admin");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto mt-16">
      <div className="mb-6">
        <Link
          href="/admin"
          className="flex items-center text-green-700 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create New Project
        </h1>
        <ProjectForm
          onSubmit={handleSubmit}
          isLoading={createProject.isPending}
        />
      </div>
    </div>
  );
}
