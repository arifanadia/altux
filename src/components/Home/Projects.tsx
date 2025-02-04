import { projectData } from "@/constants"; // Assuming projectData is already available in constants file
import React from "react";
import Image from "next/image"; // Import Image component for optimized image rendering
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="container mx-auto w-full px-6">
      <div>
        <h2 className="section-heading text-3xl font-semibold mb-8">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-12">
        {projectData.slice(0,3).map((project) => (
          <div key={project.id} className="border-accent border p-6 rounded-lg shadow-lg">
            {/* Project Image */}
            <div className="mb-6">
              <Image
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={400} 
                className="object-cover rounded-lg" 
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:text-primary hover:underline flex gap-2 items-center bg-white rounded-full w-44 py-2 px-6"
            >
              Visit Project
              <MoveUpRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
