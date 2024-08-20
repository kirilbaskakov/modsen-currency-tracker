import styled from 'styled-components';

const POPUP_Z = 2;
const POPUP_TOP = '5%';
const POPUP_PADDING = ' 0.5rem 1rem';
const POPUP_RADIUS = '5px';
const TRANSITION_DURATION = '0.3s';

export const PopupStyled = styled.div`
  position: fixed;
  z-index: ${POPUP_Z};
  text-wrap: nowrap;
  top: ${POPUP_TOP};
  left: 50%;
  transform: translateX(-50%);
  padding: ${POPUP_PADDING};
  background-color: ${props =>
    props.$isSuccess ? props.theme.colors.green : props.theme.colors.red};
  border-radius: ${POPUP_RADIUS};
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fw.semibold};
  transition: opacity ${TRANSITION_DURATION} ease-in-out;

  opacity: ${props => (props.$isVisible ? 1 : 0)};
`;
