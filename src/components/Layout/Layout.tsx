import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "сonstants/routes";

import { v4 } from "uuid";

import {
  LayoutWrapper,
  AppHeader,
  AppFooter,
  AppMain,
  HeaderLink,
  HeaderNav,
  HeaderLogo,
  FooterLink,
  FooterLogo,
  LogoImg,
  FooterNav,
} from "./styles";
import { LayoutProps } from "./types";
import { object } from "yup";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(APP_ROUTES.HOME);
  };

  const appLinks = {
    [APP_ROUTES.HOME]: "Home",
    [APP_ROUTES.CONTACT_US]: "Contact Us",
    [APP_ROUTES.ABOUT]: "About",
    [APP_ROUTES.LOGIN]: "Login",
    [APP_ROUTES.CLIENTS]: "Clients",
  };

  // console.log(Object.keys(appLinks));
  // console.log(Object.values(appLinks));

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

  const footerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <FooterLink key={v4()} to={link}>
        {appLinks[link as keyof typeof appLinks]}
      </FooterLink>
    );
  });

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>
          <LogoImg src={LH_logo} alt="Lufthansa Logo"/>
        </HeaderLogo>
        <HeaderNav>
          {/* <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={APP_ROUTES.HOME}
          >
            Home
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to={APP_ROUTES.ABOUT}
          >
            About
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to={APP_ROUTES.CLIENTS}
          >
            Clients
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to={APP_ROUTES.CONTACT_US}
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to={APP_ROUTES.LOGIN}
          >
            Login
          </HeaderLink> */}
          {headerLinks}
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterLogo onClick={goToHomePage}>App Logo</FooterLogo>
        <FooterNav>
          {/* <FooterLink to={APP_ROUTES.HOME}>Home</FooterLink>
          <FooterLink to={APP_ROUTES.ABOUT}>About</FooterLink>
          <FooterLink to={APP_ROUTES.CLIENTS}>Clients</FooterLink>
          <FooterLink to={APP_ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={APP_ROUTES.LOGIN}>Login</FooterLink> */}
          {footerLinks}
        </FooterNav>
      </AppFooter>
    </LayoutWrapper>
  );
}

export default Layout;
