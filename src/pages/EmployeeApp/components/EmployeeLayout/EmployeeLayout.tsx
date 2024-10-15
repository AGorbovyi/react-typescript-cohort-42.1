import {
  EmployeeLayoutWrapper,
  AppHeader,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  Main,
} from "./styles";

import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { APP_EMPLOYEE_ROUTES } from "сonstants/routes";

import { EmployeeLayoutProps } from "./types";

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const navigate = useNavigate();
  const goToEmployeeForm = () => {
    navigate(APP_EMPLOYEE_ROUTES.FORM);
  };
  const appLinks = {
    [APP_EMPLOYEE_ROUTES.FORM]: "Form",
    [APP_EMPLOYEE_ROUTES.CARD]: "Card",
    // [APP_EMPLOYEE_ROUTES.NOT_FOUND]: "Not-found",
  };

  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }: { isActive: boolean }) => ({
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
    <EmployeeLayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToEmployeeForm}>Logo</HeaderLogo>
        <HeaderNav>
          {headerLinks}
          {/* <HeaderLink to="/">Form</HeaderLink> */}
          {/* <HeaderLink to="/">Employee Card</HeaderLink> */}
        </HeaderNav>
      </AppHeader>
      <Main>{children}</Main>
    </EmployeeLayoutWrapper>
  );
}
export default EmployeeLayout;
