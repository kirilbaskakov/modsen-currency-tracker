import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;
