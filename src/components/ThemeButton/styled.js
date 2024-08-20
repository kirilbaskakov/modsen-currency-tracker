import styled from 'styled-components';

const BUTTON_RADIUS = '15px';
const BUTTON_BORDER_WIDTH = '2px';
const BUTTON_HEIGHT = '24px';
const BUTTON_WIDTH = '40px';

const CIRCLE_BORDER_WIDTH = '2px';
const CIRCLE_SIZE = '21px';

export const Button = styled.div`
  cursor: pointer;
  border-radius: ${BUTTON_RADIUS};
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.primary};
  height: ${BUTTON_HEIGHT};
  width: ${BUTTON_WIDTH};
  position: relative;
`;

export const Circle = styled.div`
  border: ${CIRCLE_BORDER_WIDTH} solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: ${CIRCLE_SIZE};
  height: ${CIRCLE_SIZE};
  position: absolute;
  ${props => (props.$switched ? 'right' : 'left')}: 0;
`;
