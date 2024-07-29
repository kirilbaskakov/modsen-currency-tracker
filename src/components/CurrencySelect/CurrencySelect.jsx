import React, { Component } from 'react';
import { Option, Select } from './styled';
import { currencyInfo } from '@/constants/currencyCards';

class CurrencySelect extends Component {
  constructor() {
    super();
    this.values = Object.keys(currencyInfo);
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

export default CurrencySelect;
