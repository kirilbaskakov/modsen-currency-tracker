import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  text-align: center;
  line-height: 2em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Description = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fs.medium};
`;

export const Highlighted = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.large};
  line-height: 1.5em;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${props => props.theme.colors.darkGray};
  border-radius: 5px;
  gap: 2rem;
  align-items: center;
  padding: 0 1rem;
`;

export const Separator = styled.div`
  height: ${props => props.theme.fs.large};
  width: 2px;
  background-color: ${props => props.theme.colors.lightGray};
`;

export const Input = styled.input`
  border: none;
  font-size: ${props => props.theme.fs.large};
  width: 50%;
  padding: 0 0.25rem;
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
  font-weight: 500;
  padding: 1rem 0;
  min-width: 250px;
`;
export const Button = styled.button`
  cursor: pointer;
  width: auto;
  margin: 0 auto;
  font-size: ${props => props.theme.fs.medium};
  font-weight: 500;
  padding: 0.25rem 1.5rem;
  color: ${props => props.theme.colors.green};
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.green};
`;
