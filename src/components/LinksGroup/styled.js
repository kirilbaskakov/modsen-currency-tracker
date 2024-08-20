import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TITLE_MARGIN_BOTTOM = '1.5rem';

const ARROW_TRANSITION = 'all 0.3s';

const LINKS_MAX_HEIGHT_S = '50px';
const LINKS_MAX_HEIGHT_L = '150px';
const LINKS_BORDER = '1px solid #607D94';
const LINKS_GAP = '1rem';
const LINKS_TRANSITION = 'max-height 0.25s';

export const LinksGroupStyled = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinksTitle = styled.h4`
  font-size: ${props => props.theme.fs.large};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${TITLE_MARGIN_BOTTOM};
`;

export const Arrow = styled.img`
  vertical-align: middle;
  transform: rotate(${props => (props.$rotated ? '-90deg' : '0')});
  transition: ${ARROW_TRANSITION};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Links = styled.div`
  max-height: ${props => (props.$isOpen ? LINKS_MAX_HEIGHT_S : '0px')};
  border: ${props => (props.$rotatedisOpen ? 'none' : LINKS_BORDER)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${LINKS_GAP};
  transition: ${LINKS_TRANSITION};
  @media (min-width: 768px) {
    display: flex;
    max-height: ${LINKS_MAX_HEIGHT_L};
    border: none;
  }
`;
export const GroupLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fs.medium};
`;
