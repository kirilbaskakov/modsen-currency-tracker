import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { currencies } from '@/constants/currenciesData';

import { Option, Select } from './styled';

class CurrencySelect extends Component {
  constructor() {
    super();
    this.values = Object.keys(currencies);
  }

  render() {
    return (
      <Select onChange={this.props.onChange}>
        {this.values.map(value => (
          <Option key={value}>{value}</Option>
        ))}
      </Select>
    );
  }
}

CurrencySelect.propTypes = {
  onChange: PropTypes.func
};
export default CurrencySelect;
