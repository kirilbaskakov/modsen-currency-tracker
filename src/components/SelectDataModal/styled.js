import styled from 'styled-components';

const TITLE_LINE_HEIGHT = '1.5em';

const DATE_LINE_HEIGHT = '2em';

const DATE_INPUT_PADDING = '0.5rem';

const BUTTON_PADDING = '0.25rem 0.75rem';
const BUTTON_RADIUS = '5px';
const BUTTON_BORDER_WIDTH = '2px';

const BUTTONS_GAP = '1rem';

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  text-align: center;
  line-height: ${TITLE_LINE_HEIGHT};
`;

export const DateLabel = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
  line-height: ${DATE_LINE_HEIGHT};
`;

export const DateInput = styled.input`
  padding: ${DATE_INPUT_PADDING};
  font-family: inherit;
  font-size: ${props => props.theme.fs.small};
`;

export const Button = styled.button`
  font-size: ${props => props.theme.fs.small};
  cursor: pointer;
  padding: ${BUTTON_PADDING};
  background-color: transparent;
  font-weight: ${props => props.theme.fw.semibold};
  border-radius: ${BUTTON_RADIUS};
`;

export const ConfirmButton = styled(Button)`
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.green};
`;

export const CancelButton = styled(Button)`
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.red};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${BUTTONS_GAP};
`;
