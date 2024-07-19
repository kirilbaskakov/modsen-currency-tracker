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
    box-shadow: 0px 0px 5px 10px #26471f;
  }

  50% {
    box-shadow: 0px 0px 3px 6px #26471f;
  }

  100% {
    box-shadow: 0px 0px 5px 10px #26471f;
  }
`;

export const Indicator = styled.div`
  border-radius: 50%;
  background-color: #00bc4f;
  width: 16px;
  height: 16px;
  box-shadow: 0px 0px 5px 10px #26471f;
  animation: ${blink} 2s linear infinite;
`;

export const Text = styled.h4`
  font-size: ${theme.fs.large};
  color: #d9d9d9;
  font-weight: 300;
`;
