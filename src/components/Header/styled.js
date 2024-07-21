import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme.mainBg};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }
`;

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
