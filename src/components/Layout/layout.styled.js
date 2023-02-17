import styled from 'styled-components';
import img from '../../img/bg.jpg';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.header`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0px 62px;
  color: #dff9fb;
  background-color: #766a6a;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${img});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 40px;
  color: #dff9fb;
  text-decoration: none;
  &:hover {
    color: cadetblue;
    text-decoration: underline;
  }
`;
