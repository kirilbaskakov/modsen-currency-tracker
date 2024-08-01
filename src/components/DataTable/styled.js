import styled from 'styled-components';

export const AmountInput = styled.input`
  padding: 0.25rem;
  font-size: ${props => props.theme.fs.small};
  max-width: 80px;
  text-align: center;
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

export const GridButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Error = styled.div`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fs.small};
  opacity: ${props => (props.isVisible ? 1 : 0)};
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
  outline: ${props =>
    props.isError ? `2px solid ${props.theme.colors.red}` : 'none'};
`;

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

export const Label = styled.span``;
