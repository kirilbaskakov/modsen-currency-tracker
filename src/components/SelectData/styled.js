import styled from 'styled-components';

const BUTTON_PADDING = '0.5rem 1rem';
const BUTTON_BORDER_WIDTH = '1px';
const BUTTON_RADIUS = '5px';

export const Button = styled.button`
  cursor: pointer;
  padding: ${BUTTON_PADDING};
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.primary};
  border-radius: ${BUTTON_RADIUS};

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;
