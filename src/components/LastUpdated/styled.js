import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

export const LastUpdated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 1.5rem;
`;

const blink = keyframes`
  0% {
    box-shadow: 0px 0px 5px 10px ${theme.colors.indicatorShadow};
  }

  50% {
    box-shadow: 0px 0px 3px 6px ${theme.colors.indicatorShadow};
  }

  100% {
    box-shadow: 0px 0px 5px 10px ${theme.colors.indicatorShadow};
  }
`;

export const Indicator = styled.div`
  border-radius: 50%;
  background-color: ${theme.colors.indicator};
  width: 16px;
  height: 16px;
  box-shadow: 0px 0px 5px 10px ${theme.colors.indicatorShadow};
  animation: ${blink} 2s linear infinite;
`;

export const Text = styled.h4`
  font-size: ${theme.fs.large};
  color: ${theme.colors.secondary};
  font-weight: 300;
`;
