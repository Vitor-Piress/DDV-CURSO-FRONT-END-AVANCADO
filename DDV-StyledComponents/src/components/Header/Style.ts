import styled from "styled-components";
import { Link } from "../Link";

export const HeaderContainer = styled.header`
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  box-shadow: 0px 5px 10px #bbbbbb;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: #7c7c7c;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-sizing: border-box;
`;

export const NavLink = styled(Link)`
  text-decoration: underline;
  color: blue;
`;
