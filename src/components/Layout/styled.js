import styled from 'styled-components';

const MAX_WIDTH = '1224px';
const CONTAINER_PADDING = '0 2rem';

const MAIN_PADDING = '2.5rem 0';
const MAIN_MIN_HEIGHT = '70vh';

export const Body = styled.div`
  background-color: ${props => props.theme.colors.mainBg};
  overflow-x: hidden;
`;

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: ${CONTAINER_PADDING};
`;

export const Main = styled.main`
  padding: ${MAIN_PADDING};
  position: relative;
  min-height: ${MAIN_MIN_HEIGHT};
`;
