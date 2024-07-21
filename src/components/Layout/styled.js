import styled from 'styled-components';

export const Body = styled.div`
  background-color: ${props => props.theme.colors.mainBg};
`;

export const Container = styled.div`
  max-width: 1224px;
  margin: 0 auto;
  position: relative;
  min-height: 60vh;
  padding: 0 2rem;
`;

export const Main = styled.main`
  padding: 2.5rem 0;
`;
