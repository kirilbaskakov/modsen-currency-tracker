import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  width: 35px;
  height: 25px;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 2px;
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBg};
  z-index: 2;
  transform: scaleY(${props => (props.isOpen ? 1 : 0)}) translateY(5%);
  transform-origin: top;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: all 0.26s ease;
`;

export const DropdownItem = styled(NavLink)`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  font-weight: 500;
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
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
