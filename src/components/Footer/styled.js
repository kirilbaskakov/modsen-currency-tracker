import styled from 'styled-components';

const FOOTER_PADDING = '2rem 0';

const LOGO_MARGIN_RIGHT = '0.75rem';
const LOGO_SIZE_S = '30px';
const LOGO_SIZE_L = '40px';

const DESCRIPTION_MARGIN_TOP = '1.5rem';
const DESCRIPTION_LINE_HEIGHT = '1.5rem';

const FOOTER_GAP_S = '1.5rem';
const FOOTER_GAP_L = '4rem';

const RIGHTS_MARGIN_TOP = '3rem';

export const FooterStyled = styled.footer`
  padding: ${FOOTER_PADDING};
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Title = styled.span`
  background: ${props => props.theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${props => props.theme.fs.medium};
  font-weight: ${props => props.theme.fw.semibold};
`;

export const LogoStyled = styled.img`
  vertical-align: middle;
  margin-right: ${LOGO_MARGIN_RIGHT};
  width: ${LOGO_SIZE_S};
  height: ${LOGO_SIZE_S};

  @media (min-width: 768px) {
    width: ${LOGO_SIZE_L};
    height: ${LOGO_SIZE_L};
  }
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.primary};
  margin-top: ${DESCRIPTION_MARGIN_TOP};
  line-height: ${DESCRIPTION_LINE_HEIGHT};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${FOOTER_GAP_S};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${FOOTER_GAP_L};
  }
`;

export const Rights = styled.div`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.lightGray};
  text-align: center;
  margin-top: ${RIGHTS_MARGIN_TOP};
`;
