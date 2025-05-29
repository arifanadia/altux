import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TProject } from "@/types";
import {
  CreateProject,
  DeleteProject,
  GetAllProjects,
  GetProject,
  UpdateProject,
} from "@/services/ProjectService";

export const useProjects = () => {
  const queryClient = useQueryClient();

  // Get all projects
  const useAllProjects = () => {
    return useQuery({
      queryKey: ["projects"],
      queryFn: GetAllProjects,
    });
  };

  // Get single project
  const useProject = (id: string) => {
    return useQuery({
      queryKey: ["project", id],
      queryFn: () => GetProject(id),
      enabled: !!id,
    });
  };

  // Create project
  const useCreateProject = () => {
    return useMutation({
      mutationFn: (project: TProject) => CreateProject(project),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
      },
    });
  };

  // Update project
  const useUpdateProject = () => {
    return useMutation({
      mutationFn: ({
        id,
        project,
      }: {
        id: string;
        project: Partial<TProject>;
      }) => UpdateProject(id, project),
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        queryClient.invalidateQueries({ queryKey: ["project", variables.id] });
      },
    });
  };

  // Delete project
  const useDeleteProject = () => {
    return useMutation({
      mutationFn: (id: string) => DeleteProject(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
      },
    });
  };

  return {
    useAllProjects,
    useProject,
    useCreateProject,
    useUpdateProject,
    useDeleteProject,
  };
};
