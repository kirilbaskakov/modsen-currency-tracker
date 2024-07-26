import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: {
    ${props => props.theme.fs.large}
  }
  font-weight: 400;
`;

export const SearchContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;

  position: relative;
`;

export const VariantsContainer = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  border-radius: 5px;
  position: absolute;
  top: 100%;
  width: 100%;
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.cardBg};
  z-index: 1;
`;

export const SearchInput = styled.input`
  display: block;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 0.5rem;
  padding-right: 2.5rem;
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.cardBg};
  width: 100%;
  outline: ${props =>
    props.isError ? `1px solid props.theme.colors.red` : 'none'};
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  position: absolute;
  right: 10px;
`;

export const Variant = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.darkGray};
  }
`;

export const Error = styled.div`
  opacity: ${props => (props.isError ? '1' : '0')};
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fs.small};
  text-align: center;
  margin-bottom: 3rem;
`;
