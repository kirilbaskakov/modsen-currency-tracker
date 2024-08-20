import PropTypes from 'prop-types';
import { Component } from 'react';

import SearchIcon from '@/assets/search-normal.svg';
import getRelevant from '@/utils/getRelevant';

import {
  Error,
  Icon,
  SearchContainer,
  SearchInput,
  Title,
  Variant,
  VariantsContainer
} from './styled';

class Search extends Component {
  constructor(props) {
    super();
    this.state = { variants: [], search: props.defaultValue, isFocused: false };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onBlur() {
    setTimeout(() => this.setState({ isFocused: false }), 100);
  }

  onChange(e) {
    const search = e.target.value;
    this.setState({ search, variants: getRelevant(search, this.props.values) });
  }

  onClick(variant) {
    return () => {
      this.setState({ search: variant });
      this.props.onVariantChange(variant);
    };
  }

  render() {
    const isError =
      this.state.search.length &&
      !this.props.values.includes(this.state.search);

    return (
      <>
        <Title>Search currency in the bank</Title>
        <SearchContainer>
          <SearchInput
            placeholder="Currency search..."
            onChange={this.onChange}
            value={this.state.search}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            isError={isError}
          />
          <Icon src={SearchIcon} alt="search" />
          <VariantsContainer $isVisible={this.state.isFocused}>
            {this.state.variants.map(variant => (
              <Variant key={variant} onClick={this.onClick(variant)}>
                {variant}
              </Variant>
            ))}
          </VariantsContainer>
        </SearchContainer>
        <Error isError={isError}>Incorrect currency</Error>
      </>
    );
  }
}

Search.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onVariantChange: PropTypes.func
};
export default Search;
