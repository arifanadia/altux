"use client";

import { Project, Review, SAMPLE_PROJECTS, SAMPLE_REVIEWS } from "./constants";
import { v4 as uuidv4 } from "uuid";

// Projects CRUD operations
export const getProjects = (): Project[] => {
  // In a real application, this would fetch from an API or database
  return [...SAMPLE_PROJECTS];
};

export const getProjectById = (id: string): Project | undefined => {
  return SAMPLE_PROJECTS.find((project) => project.id === id);
};

export const createProject = (
  project: Omit<Project, "id" | "createdAt">
): Project => {
  const newProject = {
    ...project,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };

  // In a real application, this would add to a database and return the created project
  SAMPLE_PROJECTS.push(newProject);
  return newProject;
};

export const updateProject = (
  id: string,
  projectData: Partial<Project>
): Project => {
  const index = SAMPLE_PROJECTS.findIndex((project) => project.id === id);

  if (index === -1) {
    throw new Error("Project not found");
  }

  const updatedProject = {
    ...SAMPLE_PROJECTS[index],
    ...projectData,
  };

  SAMPLE_PROJECTS[index] = updatedProject;
  return updatedProject;
};

export const deleteProject = (id: string): void => {
  const index = SAMPLE_PROJECTS.findIndex((project) => project.id === id);

  if (index === -1) {
    throw new Error("Project not found");
  }

  SAMPLE_PROJECTS.splice(index, 1);

  // Also delete associated reviews
  const reviewsToDelete = SAMPLE_REVIEWS.filter(
    (review) => review.projectId === id
  );
  reviewsToDelete.forEach((review) => {
    deleteReview(review.id);
  });
};

// Reviews CRUD operations
export const getReviews = (): Review[] => {
  return [...SAMPLE_REVIEWS];
};

export const getReviewsForProject = (projectId: string): Review[] => {
  return SAMPLE_REVIEWS.filter((review) => review.projectId === projectId);
};

export const getReviewById = (id: string): Review | undefined => {
  return SAMPLE_REVIEWS.find((review) => review.id === id);
};

export const createReview = (review: Omit<Review, "id" | "date">): Review => {
  const newReview = {
    ...review,
    id: uuidv4(),
    date: new Date().toISOString(),
  };

  SAMPLE_REVIEWS.push(newReview);
  return newReview;
};

export const updateReview = (
  id: string,
  reviewData: Partial<Review>
): Review => {
  const index = SAMPLE_REVIEWS.findIndex((review) => review.id === id);

  if (index === -1) {
    throw new Error("Review not found");
  }

  const updatedReview = {
    ...SAMPLE_REVIEWS[index],
    ...reviewData,
  };

  SAMPLE_REVIEWS[index] = updatedReview;
  return updatedReview;
};

export const deleteReview = (id: string): void => {
  const index = SAMPLE_REVIEWS.findIndex((review) => review.id === id);

  if (index === -1) {
    throw new Error("Review not found");
  }

  SAMPLE_REVIEWS.splice(index, 1);
};

// Dashboard summary data
export const getDashboardSummary = () => {
  const projects = getProjects();
  const reviews = getReviews();

  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "active").length;
  const completedProjects = projects.filter(
    (p) => p.status === "completed"
  ).length;
  const pendingProjects = projects.filter((p) => p.status === "pending").length;

  const totalReviews = reviews.length;
  const publishedReviews = reviews.filter((r) => r.isPublished).length;
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  const totalBudget = projects.reduce(
    (sum, project) => sum + project.budget,
    0
  );

  return {
    totalProjects,
    activeProjects,
    completedProjects,
    pendingProjects,
    totalReviews,
    publishedReviews,
    averageRating,
    totalBudget,
  };
};
