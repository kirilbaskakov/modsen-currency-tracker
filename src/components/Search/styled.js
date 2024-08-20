import styled from 'styled-components';

const SEARCH_WIDTH = '350px';
const SEARCH_CONTAINER_MARGIN = '2rem auto';

const VARIANTS_RADIUS = '5px';
const VARIANTS_Z = 1;

const SEARCH_RADIUS = '5px';
const SEARCH_PADDING = '0.75rem 2.5rem 0.75rem 0.5rem';

const ICON_SIZE_S = '18px';
const ICON_SIZE_L = '24px';
const ICON_RIGHT = '10px';

const VARIANT_PADDING = '0.5rem';

const ERROR_MARGIN_BOTTOM = '3rem';

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: {
    ${props => props.theme.fs.large}
  }
  font-weight: ${props => props.theme.fw.light};
`;

export const SearchContainer = styled.div`
  width: ${SEARCH_WIDTH};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${SEARCH_CONTAINER_MARGIN};

  position: relative;
`;

export const VariantsContainer = styled.div`
  display: ${props => (props.$isVisible ? 'block' : 'none')};
  border-radius: ${VARIANTS_RADIUS};
  position: absolute;
  top: 100%;
  width: 100%;
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.cardBg};
  z-index: ${VARIANTS_Z};
`;

export const SearchInput = styled.input`
  display: block;
  border: none;
  border-radius: ${SEARCH_RADIUS};
  padding: ${SEARCH_PADDING};
  font-size: ${props => props.theme.fs.small};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.cardBg};
  width: 100%;
  outline: ${props =>
    props.isError ? `1px solid props.theme.colors.red` : 'none'};
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  position: absolute;
  width: ${ICON_SIZE_S};
  height: ${ICON_SIZE_S};
  right: ${ICON_RIGHT};

  @media (min-width: 768px) {
    width: ${ICON_SIZE_L};
    height: ${ICON_SIZE_L};
  }
`;

export const Variant = styled.div`
  padding: ${VARIANT_PADDING};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.darkGray};
  }
`;

export const Error = styled.div`
  opacity: ${props => (props.isError ? '1' : '0')};
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fs.small};
  text-align: center;
  margin-bottom: ${ERROR_MARGIN_BOTTOM};
`;
