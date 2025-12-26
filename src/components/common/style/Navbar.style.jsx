import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding-left: 30px;
  padding-top: 30px;
  width: auto;
`;

export const NavLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavItemTitle = styled.div`
  font-size: 22px;
  margin-bottom: 30px;
  color: white;
`;

export const NavList = styled.ul``;

export const NavItem = styled.li`
  font-size: 15px;
  margin-bottom: 16px;
  color: white;
`;

export const NavStyleLink = styled(NavLink)`
  &.active {
    color: #eb9537;
    text-decoration: underline;
  }
`;
