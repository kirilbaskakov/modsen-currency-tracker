import styled, { keyframes } from 'styled-components';

const CONTAINER_PADDING = '2rem 0';
const CONTAINER_GAP = '1.5rem';

const INDICATOR_SHADOW_S = '0px 0px 4px 8px';
const INDICATOR_SHADOW_F = '0px 0px 2px 4px';
const INDICATOR_SIZE = '12px';
const INDICATOR_ANIMATION = '2s linear infinite';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${CONTAINER_PADDING};
  gap: ${CONTAINER_GAP};
`;

const blink = props => keyframes`
  0% {
    box-shadow: ${INDICATOR_SHADOW_S} ${props.theme.colors.indicatorShadow};
  }

  50% {
    box-shadow: ${INDICATOR_SHADOW_F} ${props.theme.colors.indicatorShadow};
  }

  100% {
    box-shadow: ${INDICATOR_SHADOW_S} ${props.theme.colors.indicatorShadow};
  }
`;

export const Indicator = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.colors.indicator};
  width: ${INDICATOR_SIZE};
  height: ${INDICATOR_SIZE};
  box-shadow: ${INDICATOR_SHADOW_S}
    ${props => props.theme.colors.indicatorShadow};
  animation: ${props => blink(props)} ${INDICATOR_ANIMATION};
`;

export const Text = styled.h4`
  font-size: ${props => props.theme.fs.large};
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fw.light};
`;
