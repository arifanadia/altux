export const APP_NAME = "AdminHub";

export type StatusType = "pending" | "active" | "completed" | "archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  budget: number;
  startDate: string;
  endDate: string | null;
  clientName: string;
  teamSize: number;
  createdAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  rating: number;
  comment: string;
  reviewer: string;
  date: string;
  isPublished: boolean;
}

// Sample data for projects
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    description:
      "Complete redesign of the client's e-commerce platform with modern UI and improved user experience.",
    status: "active",
    budget: 24000,
    startDate: "2023-09-15",
    endDate: "2024-01-15",
    clientName: "TechRetail Inc.",
    teamSize: 4,
    createdAt: "2023-09-10",
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description:
      "Development of a comprehensive healthcare management system for patient records and scheduling.",
    status: "completed",
    budget: 45000,
    startDate: "2023-05-20",
    endDate: "2023-12-10",
    clientName: "MediCare Solutions",
    teamSize: 6,
    createdAt: "2023-05-15",
  },
  {
    id: "3",
    title: "Mobile Banking App",
    description:
      "Creating a secure and user-friendly mobile banking application with transaction capability.",
    status: "pending",
    budget: 35000,
    startDate: "2024-02-01",
    endDate: null,
    clientName: "SecureBank Group",
    teamSize: 5,
    createdAt: "2024-01-15",
  },
  {
    id: "4",
    title: "Corporate Intranet Portal",
    description:
      "Building an internal communication and resource portal for a large corporation.",
    status: "active",
    budget: 28000,
    startDate: "2023-11-10",
    endDate: "2024-03-20",
    clientName: "Global Industries Ltd.",
    teamSize: 3,
    createdAt: "2023-11-01",
  },
  {
    id: "5",
    title: "Educational Platform",
    description:
      "Creating an interactive learning management system for K-12 students.",
    status: "archived",
    budget: 18000,
    startDate: "2023-03-15",
    endDate: "2023-08-30",
    clientName: "LearnSmart Academy",
    teamSize: 4,
    createdAt: "2023-03-01",
  },
];

// Sample data for reviews
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "1",
    projectId: "2",
    rating: 4.7,
    comment:
      "The team delivered an exceptional platform that exceeded our expectations. The interface is intuitive and our patient management has improved significantly.",
    reviewer: "Dr. Sarah Johnson",
    date: "2023-12-15",
    isPublished: true,
  },
  {
    id: "2",
    projectId: "5",
    rating: 4.5,
    comment:
      "The educational platform has transformed our teaching methods. Students are more engaged and we've seen improvement in learning outcomes.",
    reviewer: "Principal Robert Thompson",
    date: "2023-09-05",
    isPublished: true,
  },
  {
    id: "3",
    projectId: "2",
    rating: 4.2,
    comment:
      "Overall a good system, but there were some minor issues with the scheduling module that required additional tweaking.",
    reviewer: "Mark Wilson",
    date: "2023-12-18",
    isPublished: true,
  },
  {
    id: "4",
    projectId: "1",
    rating: 3.8,
    comment:
      "The redesign looks great but we experienced longer than expected load times. The team was responsive in addressing our concerns.",
    reviewer: "Jennifer Adams",
    date: "2023-11-10",
    isPublished: false,
  },
  {
    id: "5",
    projectId: "4",
    rating: 4.9,
    comment:
      "Exceptional work on our intranet portal. Communication has improved dramatically and our team productivity has increased by 30%.",
    reviewer: "Alex Thompson",
    date: "2024-01-20",
    isPublished: true,
  },
];
