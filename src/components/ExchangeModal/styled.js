import styled from 'styled-components';

const TITLE_LINE_HEIGHT = '2em';

const CONTAINER_GAP = '1rem';

const HIGHLIGHTED_LINE_HEIGHT = '2em';

const INPUT_CONTAINER_BORDER_WIDTH = '1px';
const INPUT_CONTAINER_RADIUS = '5px';
const INPUT_CONTAINER_GAP = '2rem';
const INPUT_CONTAINER_PADDING = '0 1rem';

const SEPARATOR_WIDTH = '2px';

const INPUT_WIDTH = '50%';
const INPUT_PADDING = '0.25rem';

const SELECT_PADDING = '1rem 1rem 1rem 0';

const BUTTON_PADDING = '0.25rem 1.5rem';
const BUTTON_BORDER_WIDTH = '2px';

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  text-align: center;
  line-height: ${TITLE_LINE_HEIGHT};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${CONTAINER_GAP};
`;

export const Description = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fs.medium};
`;

export const Highlighted = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  line-height: ${HIGHLIGHTED_LINE_HEIGHT};
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: ${INPUT_CONTAINER_BORDER_WIDTH} solid
    ${props => props.theme.colors.darkGray};
  border-radius: ${INPUT_CONTAINER_RADIUS};
  gap: ${INPUT_CONTAINER_GAP};
  align-items: center;
  padding: ${INPUT_CONTAINER_PADDING};
`;

export const Separator = styled.div`
  height: ${props => props.theme.fs.large};
  width: ${SEPARATOR_WIDTH};
  background-color: ${props => props.theme.colors.lightGray};
`;

export const Input = styled.input`
  border: none;
  font-size: ${props => props.theme.fs.large};
  width: ${INPUT_WIDTH};
  padding: ${INPUT_PADDING};
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ReadonlySelect = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  font-weight: ${props => props.theme.fw.normal};
  padding: ${SELECT_PADDING};
  text-wrap: nowrap;
`;

export const Button = styled.button`
  cursor: pointer;
  width: auto;
  margin: 0 auto;
  font-size: ${props => props.theme.fs.medium};
  font-weight: ${props => props.theme.fw.normal};
  padding: ${BUTTON_PADDING};
  color: ${props => props.theme.colors.green};
  background-color: transparent;
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.green};
`;
