import styled from 'styled-components';
import theme from '../../theme';

export const StyledList = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fs.large};
  font-weight: 300;
  color: ${theme.colors.primary};
`;

export const Separator = styled.div`
  background-color: ${theme.colors.darkGray};
  height: 2px;
  width: 100%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  gap: 2.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 45% 45%;
  }
`;
