import styled from 'styled-components';
import theme from '../../theme';

export const Footer = styled.footer`
  padding: 2rem;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: block;
  }
`;
export const Title = styled.span`
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${theme.fs.medium};
  font-weight: 600;
`;

export const Logo = styled.img`
  vertical-align: middle;
  margin-right: 0.75rem;
`;

export const Description = styled.p`
  font-size: ${theme.fs.medium};
  color: #fff;
  margin-top: 1.5rem;
  line-height: 1.5em;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4pem;
  }
`;

export const Rights = styled.div`
  font-size: ${theme.fs.medium};
  color: #898989;
  text-align: center;
  margin-top: 3rem;
`;
