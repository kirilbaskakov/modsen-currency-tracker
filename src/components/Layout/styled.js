import styled from 'styled-components';

export const Body = styled.div`
  background-color: ${props => props.theme.colors.mainBg};
  overflow-x: hidden;
`;

export const Container = styled.div`
  max-width: 1224px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Main = styled.main`
  padding: 2.5rem 0;
  position: relative;
  min-height: 70vh;
`;
