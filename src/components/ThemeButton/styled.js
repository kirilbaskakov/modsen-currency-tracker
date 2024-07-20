import styled from 'styled-components';
import theme from '../../theme';

export const Button = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid ${theme.colors.primary};
  height: 24px;
  width: 40px;
  position: relative;
`;

export const Circle = styled.div`
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 21px;
  height: 21px;
  position: absolute;
  ${props => (props.switched ? 'right' : 'left')}: 0;
`;
