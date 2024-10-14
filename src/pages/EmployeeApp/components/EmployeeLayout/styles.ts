import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const EmployeeLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  color: black;
`;

export const HeaderLogo = styled.div`
  width: 80px;
  height: 100%;
  align-items: center;
  cursor: pointer;
`;

export const HeaderNav = styled.nav`
  display: flex;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  font-weight: normal;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 50px;
  flex: 1;
  background-color: #112233;
`;
