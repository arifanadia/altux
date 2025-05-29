"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { TProject } from "@/types";
import { useProjects } from "@/Hooks/useProjects";
import ProjectForm from "@/components/projects/ProjectForm";

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { useProject, useUpdateProject } = useProjects();
  const { data: projectData, isLoading: isLoadingProject } = useProject(
    id as string
  );
  const updateProject = useUpdateProject();

  const handleSubmit = async (data: TProject) => {
    try {
      await updateProject.mutateAsync({
        id: id as string,
        project: data,
      });
      router.push(`/admin`);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  if (isLoadingProject) {
    return (
      <div className="p-6 max-w-7xl mx-auto flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (!projectData?.data) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center text-red-500 p-4 bg-red-50 rounded-md">
          Error loading project. Please try again.
        </div>
        <div className="mt-4 text-center">
          <Link href="/admin" className="text-green-700 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto mt-16">
      <div className="mb-6">
        <Link
          href={`/admin`}
          className="flex items-center text-green-700 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Project
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Project</h1>
        <ProjectForm
          initialData={projectData.data}
          onSubmit={handleSubmit}
          isLoading={updateProject.isPending}
        />
      </div>
    </div>
  );
}
