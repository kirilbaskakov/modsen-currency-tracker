import React from 'react';
import Logo from '@/assets/logo-small.svg';
import ThemeButton from '../ThemeButton/ThemeButton';
import {
  HeaderStyled,
  LinkStyled,
  LogoStyled,
  Nav,
  ThemeButtonContainer
} from './styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="Logo" />
      <BurgerMenu />
      <Nav>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/timeline">Timeline</LinkStyled>
        <LinkStyled to="/banks">Bank map</LinkStyled>
        <LinkStyled to="/contacts">Contact us</LinkStyled>
      </Nav>
      <ThemeButtonContainer>
        <ThemeButton />
      </ThemeButtonContainer>
    </HeaderStyled>
  );
};

export default Header;
