import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.mainBg};
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
  &.active {
    text-decoration: underline;
  }
`;

export const ThemeButtonContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
