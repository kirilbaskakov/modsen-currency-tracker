import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinksGroupStyled = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LinksTitle = styled.h4`
  font-size: ${props => props.theme.fs.large};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const Arrow = styled.img`
  vertical-align: middle;
  transform: rotate(${props => (props.$rotated ? '-90deg' : '0')});
  transition: all 0.3s;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Links = styled.div`
  max-height: ${props => (props.$isOpen ? '50px' : '0px')};
  border: ${props => (props.$rotatedisOpen ? 'none' : '1px solid #607D94')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: max-height 0.25s;
  @media (min-width: 768px) {
    display: flex;
    max-height: 150px;
    border: none;
  }
`;
export const GroupLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fs.medium};
`;
