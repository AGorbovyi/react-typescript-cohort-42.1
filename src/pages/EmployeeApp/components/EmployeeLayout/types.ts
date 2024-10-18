import { ReactNode, Dispatch, SetStateAction } from "react";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface UserDataProps {
  name: string;
  surname: string;
  age: number;
  jobPosition: string;
}

export interface EmployeeContextState {
  userData: UserDataProps[];
  setUserData: Dispatch<SetStateAction<UserDataProps[]>>;
}
