import styled from 'styled-components';

export const CardContainer = styled.div`
  ${props => (props.isHoverable ? 'cursor: pointer;' : '')}
  background-color: ${props =>
    props.outlined ? props.theme.colors.cardBg : 'transparent'};
  border-radius: 5px;
  border: ${props =>
    props.outlined ? `1px solid ${props.theme.colors.darkGray}` : 'none'};
  padding: ${props => (props.outlined ? '2rem' : '2rem 0')};
  display: flex;
  gap: 1.5rem;

  &:hover {
    ${props =>
      props.isHoverable
        ? `background-color: ${props.theme.colors.cardHoverBg}; `
        : ''};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

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
