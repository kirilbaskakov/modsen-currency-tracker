import styled from 'styled-components';

const CARD_RADIUS = '5px';
const CARD_PADDING = '2rem';
const CARD_BORDER_WIDTH = '1px';
const CARD_GAP = '1.5rem';

const ICON_SIZE_S = '40px';
const ICON_SIZE_L = '80px';

export const CardContainer = styled.div`
  ${props => (props.$isHoverable ? 'cursor: pointer;' : '')}
  background-color: ${props =>
    props.$outlined ? props.theme.colors.cardBg : 'transparent'};
  border-radius: ${CARD_RADIUS};
  border: ${props =>
    props.$outlined
      ? `${CARD_BORDER_WIDTH} solid ${props.theme.colors.darkGray}`
      : 'none'};
  padding: ${props => (props.$outlined ? CARD_PADDING : `${CARD_PADDING} 0`)};
  display: flex;
  gap: ${CARD_GAP};

  &:hover {
    ${props =>
      props.$isHoverable
        ? `background-color: ${props.theme.colors.cardHoverBg}; `
        : ''};
  }
`;

export const Icon = styled.img`
  width: ${ICON_SIZE_S};
  height: ${ICON_SIZE_S};

  @media (min-width: 768px) {
    width: ${ICON_SIZE_L};
    height: ${ICON_SIZE_L};
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
