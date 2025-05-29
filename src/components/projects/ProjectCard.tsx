import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkIcon, Pencil, Trash2 } from "lucide-react";
import { TProject } from "@/types";

interface ProjectCardProps {
  project: TProject;
  onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.details}
        </p>
        <div className="flex items-center justify-between mt-4">
          <a
            href={project.link}
            className="flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon className="h-4 w-4" />
            View Project
          </a>
          <div className="flex gap-2">
            <Link href={`/admin/edit/${project._id}`}>
              <button
                className="p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
                aria-label="Edit project"
              >
                <Pencil size={16} />
              </button>
            </Link>
            <button
              onClick={() => onDelete(project._id as string)}
              className="p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
              aria-label="Delete project"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
