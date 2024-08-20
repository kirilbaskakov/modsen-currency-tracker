import styled, { keyframes } from 'styled-components';

const LOADER_TOP = '5%';
const LOADER_LEFT = 'calc(50% - 25px)';
const LOADER_SIZE = '50px';
const LOADER_BORDER_WIDTH = '8px';
const ANIMATION_DURATION1 = '0.8s';
const ANIMATION_DURATION2 = '1.6s';

const loader1 = keyframes`
     0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
     12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
     25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
     50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
     62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
     75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
     100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
  `;
const loader2 = keyframes`
    0%    {transform:scaleY(1)  rotate(0deg)}
    49.99%{transform:scaleY(1)  rotate(135deg)}
    50%   {transform:scaleY(-1) rotate(0deg)}
    100%  {transform:scaleY(-1) rotate(-135deg)}
`;

export const LoaderStyled = styled.div`
  position: absolute;
  top: ${LOADER_TOP};
  left: ${LOADER_LEFT};
  width: ${LOADER_SIZE};
  height: ${LOADER_SIZE};
  border-radius: 50%;
  border: ${LOADER_BORDER_WIDTH} solid ${props => props.theme.colors.green};
  animation:
    ${loader1} ${ANIMATION_DURATION1} infinite linear alternate,
    ${loader2} ${ANIMATION_DURATION2} infinite linear;
`;
