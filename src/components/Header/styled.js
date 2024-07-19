import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const Header = styled.header`
  background-color: #000000;
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
  color: #fff;
  font-size: ${theme.fs.small};
`;
