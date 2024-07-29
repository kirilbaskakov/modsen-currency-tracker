import React from 'react';
import Logo from '@/assets/logo-small.svg';
import ThemeButton from '../ThemeButton/ThemeButton';
import { HeaderStyled, LinkStyled, LogoStyled, Nav } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="Logo" />
      <Nav>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/timeline">Timeline</LinkStyled>
        <LinkStyled to="/banks">Bank map</LinkStyled>
        <LinkStyled>Contacts</LinkStyled>
      </Nav>
      <ThemeButton />
    </HeaderStyled>
  );
};

export default Header;
