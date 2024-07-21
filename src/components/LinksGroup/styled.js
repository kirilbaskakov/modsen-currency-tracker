import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinksTitle = styled.h4`
  font-size: ${props => props.theme.fs.large};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const GroupLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fs.medium};
`;
