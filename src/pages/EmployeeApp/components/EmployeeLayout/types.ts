import { ReactNode } from "react";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface UserData {
    fullName: string;
    age: number;
    jobPosition: string;
  }