import styled from 'styled-components';

const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.3)';
const OVERLAY_Z = 99;

const MODAL_PADDING = '1rem 2rem';
const MODAL_RADIUS = '8px';
const MODAL_MIN_WIDTH = '350px';
const MODAL_Z = 100;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${OVERLAY_COLOR};
  z-index: ${OVERLAY_Z};
`;

export const ModalStyled = styled.div`
  padding: ${MODAL_PADDING};
  border-radius: ${MODAL_RADIUS};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: ${MODAL_MIN_WIDTH};
  background-color: ${props => props.theme.colors.cardBg};
  z-index: ${MODAL_Z};
`;
