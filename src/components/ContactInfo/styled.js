import styled from 'styled-components';

export const Description = styled.p`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.secondary};
  line-height: 2em;
`;

export const Text = styled.h3`
  font-size: ${props => props.theme.fs.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: 400;
  line-height: 2em;
`;

export const Bold = styled.span`
  font-weight: 700;
`;
