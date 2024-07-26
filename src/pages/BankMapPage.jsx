import React, { useState } from 'react';
import Map from '../components/Map/Map';
import Search from '../components/Search/Search';
import { currencies } from '../constants/currencyCards';

const BankMapPage = () => {
  const [currency, setCurrency] = useState('');

  const onVariantChange = variant => {
    setCurrency(variant);
  };

  return (
    <>
      <Search values={currencies} onVariantChange={onVariantChange} />
      <Map currency={currency} />
    </>
  );
};

export default BankMapPage;
