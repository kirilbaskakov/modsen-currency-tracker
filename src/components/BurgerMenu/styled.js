import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BURGER_WIDTH = '35px';
const BURGER_HEIGHT = '25px';

const LINE_HEIGHT = '3px';
const LINE_RADIUS = '2px';

const DROPDOWN_Z = 2;
const DROPDOWN_ANIM_DURATION = '0.26s';
const DROPDOWN_TRANSLATE_Y = '5%';
const DROPDOWN_GAP = '0.5rem';
const DROPDOWN_ITEM_PADDING = '1.5rem 0';

const OVERLAY_Z = 1;
const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.3)';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Burger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${BURGER_WIDTH};
  height: ${BURGER_HEIGHT};
`;

export const Line = styled.div`
  width: 100%;
  height: ${LINE_HEIGHT};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${LINE_RADIUS};
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBg};
  z-index: ${DROPDOWN_Z};
  transform: scaleY(${props => (props.$isOpen ? 1 : 0)})
    translateY(${DROPDOWN_TRANSLATE_Y});
  transform-origin: top;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transition: all ${DROPDOWN_ANIM_DURATION} ease;
`;

export const DropdownItem = styled(NavLink)`
  padding: ${DROPDOWN_ITEM_PADDING};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${DROPDOWN_GAP};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  font-weight: ${props => props.theme.fw.normal};
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${OVERLAY_COLOR};
  z-index: ${OVERLAY_Z};
`;
