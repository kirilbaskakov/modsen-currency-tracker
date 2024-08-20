import styled from 'styled-components';

const PADDING = '1rem';

export const Select = styled.select`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  font-weight: ${props => props.theme.fw.normal};
  background-color: transparent;
  border: none;
  padding: ${PADDING} 0;
  padding-right: ${PADDING};

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.mainBg};
`;
