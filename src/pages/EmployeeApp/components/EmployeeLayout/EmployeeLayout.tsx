import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

import { APP_EMPLOYEE_ROUTES } from "сonstants/routes";

import {
  EmployeeLayoutWrapper,
  AppHeader,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  Main,
} from "./styles";
import {
  EmployeeLayoutProps,
  UserDataProps,
  EmployeeContextState,
} from "./types";

export const EmployeeContext = createContext<EmployeeContextState>({
  userData: [],
  setUserData: () => {},
});

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const [userData, setUserData] = useState<UserDataProps[]>([]);

  const navigate = useNavigate();
  const goToEmployeeForm = () => {
    navigate(APP_EMPLOYEE_ROUTES.FORM);
  };
  const appLinks = {
    [APP_EMPLOYEE_ROUTES.FORM]: "Create Employee",
    [APP_EMPLOYEE_ROUTES.CARD]: "Employees",
    // [APP_EMPLOYEE_ROUTES.NOT_FOUND]: "Not-found",
  };

  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    );
  });

  return (
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      <EmployeeLayoutWrapper>
        <AppHeader>
          <HeaderLogo onClick={goToEmployeeForm}>App Logo</HeaderLogo>
          <HeaderNav>{headerLinks}</HeaderNav>
        </AppHeader>
        <Main>{children}</Main>
      </EmployeeLayoutWrapper>
    </EmployeeContext.Provider>
  );
}
export default EmployeeLayout;
