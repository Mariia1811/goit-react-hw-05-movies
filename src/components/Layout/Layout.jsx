import Loader from 'components/Loader';
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom'
import { Nav, NavLinkStyled, Wrapper } from './layout.styled';

function Layout() {
  return (
    <>
      <Wrapper>
        <Nav>
        <NavLinkStyled to="/" end>Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Wrapper>
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </>
  );
}

export default Layout
