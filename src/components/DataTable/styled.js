import styled from 'styled-components';

const INPUT_PADDING = '0.25rem';
const INPUT_MAX_WIDTH = '80px';

const CONTAINER_RADIUS = '5px';
const CONTAINER_GAP = '0.75rem';
const CONTAINER_MARGIN = '1rem 0';
const CONTAINER_PADDING = '1rem';
const CONTAINER_HEIGHT = '400px';

const GRID_BTNS_GAP = '1rem';

const GRID_GAP = '0.5rem';

const NUMBER_MIN_WIDTH = '35px';
const NUMBER_PADDING = '0.25rem';

const BUTTON_PADDING = '0.25rem 0.75rem';
const BUTTON_RADIUS = '5px';
const BUTTON_BORDER_WIDTH = '2px';

export const AmountInput = styled.input`
  padding: ${INPUT_PADDING};
  font-size: ${props => props.theme.fs.small};
  max-width: ${INPUT_MAX_WIDTH};
  text-align: center;
`;

export const Container = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${CONTAINER_RADIUS};
  display: flex;
  flex-direction: column;
  gap: ${CONTAINER_GAP};
  align-items: flex-start;
  margin: ${CONTAINER_MARGIN};
  padding: ${CONTAINER_PADDING};
  overflow-y: auto;
  height: ${CONTAINER_HEIGHT};
`;

export const GridButtons = styled.div`
  display: flex;
  gap: ${GRID_BTNS_GAP};
`;

export const Error = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fs.small};
  opacity: ${props => (props.$isVisible ? 1 : 0)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: ${GRID_GAP};
`;

export const NumberInput = styled.input`
  min-width: ${NUMBER_MIN_WIDTH};
  padding: ${NUMBER_PADDING};
  font-size: inherit;
  outline: ${props =>
    props.isError ? `2px solid ${props.theme.colors.red}` : 'none'};
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

export const Label = styled.span``;
