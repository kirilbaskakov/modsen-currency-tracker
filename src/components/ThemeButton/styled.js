import styled from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.colors.primary};
  height: 24px;
  width: 40px;
  position: relative;

  @media (min-width: 768px) {
    height: 24px;
    width: 40px;
  }
`;

export const Circle = styled.div`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 21px;
  height: 21px;
  position: absolute;
  ${props => (props.$switched ? 'right' : 'left')}: 0;

  @media (min-width: 768px) {
    width: 21px;
    height: 21px;
  }
`;
