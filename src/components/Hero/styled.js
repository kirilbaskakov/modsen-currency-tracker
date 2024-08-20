import styled from 'styled-components';

const HERO_MARGIN_LEFT = 'calc(50% - 50vw)';
const HERO_PADDING = '3rem calc(50vw - 50%)';
const HERO_GAP = '2.5rem';

const TITLE_LINE_HEIGHT = '1.5em';

const DESCRIPTION_LINE_HEIGHT = '2.5em';

export const HeroStyled = styled.div`
  width: 100vw;
  margin-left: ${HERO_MARGIN_LEFT};
  padding: ${HERO_PADDING};
  display: flex;
  justify-content: center;
  gap: ${HERO_GAP};
  background: ${props => props.theme.colors.heroBg};
`;

export const Text = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const Title = styled.h1`
  background: ${props => props.theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: ${TITLE_LINE_HEIGHT};
  font-size: ${props => props.theme.fs.veryLarge};
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fs.medium};
  line-height: ${DESCRIPTION_LINE_HEIGHT};
`;

export const LogoStyled = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
