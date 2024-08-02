import React, { Component } from 'react';
import { Option, Select } from './styled';
import { currencies } from '@/constants/currenciesData';
import PropTypes from 'prop-types';

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
