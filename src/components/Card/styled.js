import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.darkGray};
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
  font-size: ${props => props.theme.fs.large};
`;

export const Title = styled.h4`
  color: ${props => props.theme.colors.secondary};
`;

export const Subtitle = styled.span`
  color: ${props => props.theme.colors.cardSubtitle};
`;
