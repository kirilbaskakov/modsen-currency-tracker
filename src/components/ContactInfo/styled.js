import styled from 'styled-components';

const LINE_HEIGHT = '2em';

export const Description = styled.p`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.secondary};
  line-height: ${LINE_HEIGHT};
`;

export const Text = styled.h3`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fw.light};
  line-height: ${LINE_HEIGHT};
`;

export const Bold = styled.span`
  font-weight: ${props => props.theme.fw.bold};
`;
