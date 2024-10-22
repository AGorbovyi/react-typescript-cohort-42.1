import { ReactNode, Dispatch, SetStateAction } from "react";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface UserDataProps {
  firstName: string;
  lastName: string;
  age: string;
  jobPosition: string;
}

export interface EmployeeContextState {
  userData: UserDataProps[];
  setUserData: Dispatch<SetStateAction<UserDataProps[]>>;
}
