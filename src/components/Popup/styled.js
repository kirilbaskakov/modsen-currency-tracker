import styled from 'styled-components';

export const PopupStyled = styled.div`
  position: fixed;
  text-wrap: nowrap;
  top: 5.75rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background-color: ${props =>
    props.isSuccess ? props.theme.colors.green : props.theme.colors.red};
  border-radius: 5px;
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  transition: opacity 0.3s ease-in-out;

  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
