import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.mainBg};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }
`;

export const LogoStyled = styled.img``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
`;
