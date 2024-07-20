import styled from 'styled-components';
import theme from '../../theme';

export const Card = styled.div`
  background-color: ${theme.colors.cardBg};
  border-radius: 5px;
  border: 1px solid ${theme.colors.darkGray};
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${theme.fs.large};
`;

export const Title = styled.h4`
  color: ${theme.colors.secondary};
`;

export const Subtitle = styled.span`
  color: ${theme.colors.cardSubtitle};
`;
