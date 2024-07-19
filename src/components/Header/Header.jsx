import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-small.svg';
import ThemeButton from '../ThemeButton/ThemeButton';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <img src={Logo} alt="Logo" />
      <S.Nav>
        <S.LinkStyled to="/">Home</S.LinkStyled>
        <S.LinkStyled to="/timeline">Timeline</S.LinkStyled>
        <S.LinkStyled to="/banks">Bank map</S.LinkStyled>
        <S.LinkStyled>Contacts</S.LinkStyled>
      </S.Nav>
      <ThemeButton />
    </S.Header>
  );
};

export default Header;
