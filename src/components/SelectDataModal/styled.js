import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  text-align: center;
  line-height: 1.5em;
`;

export const DateLabel = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
  line-height: 2em;
`;
export const DateInput = styled.input`
  padding: 0.5rem;
  font-family: inherit;
  font-size: ${props => props.theme.fs.small};
`;
export const Container = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.small};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
  margin: 1rem 0;
  padding: 1rem;
  overflow-y: auto;
  height: 400px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 0.5rem;
`;

export const NumberInput = styled.input`
  min-width: 35px;
  padding: 0.25rem;
  font-size: inherit;
`;

export const Label = styled.span``;

export const Button = styled.button`
  font-size: ${props => props.theme.fs.small};
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  font-weight: 600;
  border-radius: 5px;
`;

export const ConfirmButton = styled(Button)`
  border: 2px solid ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.green};
`;

export const CancelButton = styled(Button)`
  border: 2px solid ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.red};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
