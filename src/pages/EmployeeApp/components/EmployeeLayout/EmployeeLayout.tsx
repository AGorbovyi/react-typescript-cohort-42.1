// Task description:
// https://docs.google.com/document/d/1XBAfG5vnCZ4qBCvDSsgVQrBCv9iLoiRzTml7-EF8dW0/edit?tab=t.0

import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import { APP_EMPLOYEE_ROUTES } from "сonstants/routes";

import { EmployeeLayoutProps } from "./types";
import {
  EmployeeLayoutWrapper,
  AppHeader,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  Main,
} from "./styles";

// export const EmployeeContext = createContext<any>({
//     userData:undefined, setUserData:()=>{}
// });

function EmployeeLayout({ children }: EmployeeLayoutProps) {

    // const [userData, setUserData] = useState<any>(undefined);

  const navigate = useNavigate();
  const goToEmployeeForm = () => {
    navigate(APP_EMPLOYEE_ROUTES.FORM);
  };

  return (
 // <EmployeeContext.Provider value={{userData:userData, setUserData:setUserData}}> 
      <EmployeeLayoutWrapper>
        <AppHeader>
          <HeaderLogo onClick={goToEmployeeForm}>Logo</HeaderLogo>
          <HeaderNav>
            <HeaderLink 
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })} 
            to={APP_EMPLOYEE_ROUTES.FORM}>Create Employee</HeaderLink>
            <HeaderLink 
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })} 
            to={APP_EMPLOYEE_ROUTES.CARD}>Employees</HeaderLink>
          </HeaderNav>
        </AppHeader>
        <Main>{children}</Main>
      </EmployeeLayoutWrapper>
    // </EmployeeContext>
  );
}

export default EmployeeLayout;
