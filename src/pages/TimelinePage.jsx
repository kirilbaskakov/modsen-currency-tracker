import React, { useState } from 'react';
import CurrencySelect from '../components/CurrencySelect/CurrencySelect';
import Card from '../components/Card/Card';
import CurrencyChart from '../components/CurrencyChart/CurrencyChart';
import SelectData from '../components/SelectData/SelectData';
import { currencyInfo } from '../constants/currencyCards';

const TimelinePage = () => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState(Object.keys(currencyInfo)[0]);

  const onCurrencyChange = e => {
    setCurrency(e.target.value);
    setData([]);
  };

  return (
    <>
      <CurrencySelect onChange={onCurrencyChange} />
      <Card
        title={currency}
        subtitle={currencyInfo[currency].code}
        icon={currencyInfo[currency].icon}
        outlined={false}
      />
      <SelectData currency={currency} data={data} setData={setData} />
      <CurrencyChart data={data} />
    </>
  );
};

export default TimelinePage;
