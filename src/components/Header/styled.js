import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HEADER_Z = 1;
const HEADER_PADDING = '1.5rem 0';

const LOGO_SIZE_S = '30px';
const LOGO_SIZE_L = '40px';

const NAV_GAP = '4rem';

export const HeaderStyled = styled.header`
  z-index: ${HEADER_Z};
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.mainBg};
  padding: ${HEADER_PADDING};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.img`
  width: ${LOGO_SIZE_S};
  height: ${LOGO_SIZE_S};

  @media (min-width: 768px) {
    width: ${LOGO_SIZE_L};
    height: ${LOGO_SIZE_L};
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: ${NAV_GAP};
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
