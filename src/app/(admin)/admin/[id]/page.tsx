"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, LinkIcon, Pencil, Trash2 } from "lucide-react";

import { useState } from "react";
import { useProjects } from "@/Hooks/useProjects";
import DeleteConfirmationModal from "@/components/projects/DeleteConfirmationModal";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { useProject, useDeleteProject } = useProjects();
  const { data: projectData, isLoading, error } = useProject(id as string);
  const deleteProject = useDeleteProject();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProject.mutateAsync(id as string);
      router.push("/projects");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (error || !projectData) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center text-red-500 p-4 bg-red-50 rounded-md">
          Error loading project. Please try again.
        </div>
        <div className="mt-4 text-center">
          <Link href="/projects" className="text-green-700 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const project = projectData.data;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link
          href="/projects"
          className="flex items-center text-green-700 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <div className="flex gap-2">
              <Link href={`/projects/${id}/edit`}>
                <button className="p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors">
                  <Pencil size={18} />
                </button>
              </Link>
              <button
                onClick={handleDeleteClick}
                className="p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {project.details}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LinkIcon size={18} />
            Visit Project
          </a>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isDeleting={deleteProject.isPending}
      />
    </div>
  );
}
