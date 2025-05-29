"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Users, PlusCircle } from "lucide-react";

import { TProject } from "@/types";
import { useProjects } from "@/Hooks/useProjects";
import ProjectCard from "@/components/projects/ProjectCard";
import DeleteConfirmationModal from "@/components/projects/DeleteConfirmationModal";

export default function ProjectsPage() {
  const { useAllProjects, useDeleteProject } = useProjects();
  const { data: projectsData, isLoading, error } = useAllProjects();
  const deleteProject = useDeleteProject();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteProject.mutateAsync(deleteId);
      setIsDeleteModalOpen(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Agency Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span className="font-medium">4.9/5 Rating</span>
          </div>
          <div className="bg-primary/10 rounded-full px-4 py-2 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">50+ Clients</span>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/admin/create">
            <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors">
              <PlusCircle size={18} />
              Add Project
            </button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4 bg-red-50 rounded-md">
            Error loading projects. Please try again.
          </div>
        ) : projectsData?.data?.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">No projects found</p>
            <Link href="/admin/create">
              <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors">
                Create your first project
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData?.data?.map((project: TProject) => (
              <ProjectCard
                key={project._id}
                project={project}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </section>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isDeleting={deleteProject.isPending}
      />
    </div>
  );
}
