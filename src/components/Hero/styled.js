import styled from 'styled-components';

export const HeroStyled = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 3rem calc(50vw - 50%);
  display: flex;
  justify-content: center;
  gap: 2.5rem;
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
  line-height: 1.5em;
  font-size: ${props => props.theme.fs.veryLarge};
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fs.medium};
  line-height: 2em;
`;

export const LogoStyled = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
