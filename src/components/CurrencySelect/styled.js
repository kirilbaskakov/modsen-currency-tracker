import styled from 'styled-components';

export const Select = styled.select`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  font-weight: 500;
  background-color: transparent;
  border: none;
  padding: 1rem 0;
  padding-right: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.mainBg};
`;
