import React from 'react';

import Logo from '@/assets/logo-small.svg';
import routes from '@/constants/routes';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeButton from '../ThemeButton/ThemeButton';
import {
  HeaderStyled,
  LinkStyled,
  LogoStyled,
  Nav,
  ThemeButtonContainer
} from './styled';

function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="Logo" />
      <Nav>
        {routes.map(({ path, name }) => (
          <LinkStyled to={path}>{name}</LinkStyled>
        ))}
      </Nav>
      <ThemeButtonContainer>
        <ThemeButton />
      </ThemeButtonContainer>
      <BurgerMenu />
    </HeaderStyled>
  );
}

export default Header;
