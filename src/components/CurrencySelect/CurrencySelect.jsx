import React from 'react';
import { Option, Select } from './styled';
import { currencyInfo } from '../../constants/currencyCards';

const CurrencySelect = ({ onChange }) => {
  const values = Object.keys(currencyInfo);
  return (
    <Select onChange={onChange}>
      {values.map(value => (
        <Option key={value}>{value}</Option>
      ))}
    </Select>
  );
};

export default CurrencySelect;
