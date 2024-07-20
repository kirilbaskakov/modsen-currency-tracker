import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinksTitle = styled.h4`
  font-size: ${theme.fs.large};
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const GroupLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.lightGray};
  font-size: ${theme.fs.medium};
`;
