import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 1.5rem;
`;

const blink = props => keyframes`
  0% {
    box-shadow: 0px 0px 4px 8px ${props.theme.colors.indicatorShadow};
  }

  50% {
    box-shadow: 0px 0px 2px 4px ${props.theme.colors.indicatorShadow};
  }

  100% {
    box-shadow: 0px 0px 4px 8px ${props.theme.colors.indicatorShadow};
  }
`;

export const Indicator = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.colors.indicator};
  width: 12px;
  height: 12px;
  box-shadow: 0px 0px 4px 8px ${props => props.theme.colors.indicatorShadow};
  animation: ${props => blink(props)} 2s linear infinite;
`;

export const Text = styled.h4`
  font-size: ${props => props.theme.fs.large};
  color: ${props => props.theme.colors.secondary};
  font-weight: 300;
`;
