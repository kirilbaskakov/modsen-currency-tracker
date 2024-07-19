import styled from 'styled-components';
import theme from '../../theme';

export const Hero = styled.div`
  padding: 3rem;
  display: flex;
  gap: 2.5rem;
  background: linear-gradient(
    259deg,
    rgba(18, 18, 18, 1) 10%,
    rgba(36, 121, 64, 0.25) 50%,
    rgba(18, 18, 18, 1) 90%
  );
`;

export const Text = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5em;
  font-size: ${theme.fs.veryLarge};
`;

export const Description = styled.p`
  color: #d9d9d9;
  font-size: ${theme.fs.medium};
  line-height: 2em;
`;

export const Logo = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
