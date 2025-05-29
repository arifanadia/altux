export type TUserRole = "admin" | "user" | "moderator";

export type Tuser = {
  email: string;
  role: TUserRole;
  iat: number;
};

export type TSignUp = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type TProject = {
  name: string;
  details: string;
  link: string;
  image: string;
  isDeleted?: boolean;
  _id?: string;
};

export interface User {
  _id: string;
  name: string;
  phone: string;
  role: "user" | "moderator" | "admin";
}

export type Role = "user" | "moderator" | "admin";
