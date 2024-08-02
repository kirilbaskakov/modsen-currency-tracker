import React, { Component } from 'react';
import CurrencySelect from '@/components/CurrencySelect/CurrencySelect';
import Card from '@/components/Card/Card';
import CurrencyChart from '@/components/CurrencyChart/CurrencyChart';
import SelectData from '@/components/SelectData/SelectData';
import { currencies } from '@/constants/currenciesData';
import Popup from '@/components/Popup/Popup';

class TimelinePage extends Component {
  constructor() {
    super();
    this.state = { currency: Object.keys(currencies)[0] };
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }

  onCurrencyChange(e) {
    this.setState({ currency: e.target.value });
  }

  render() {
    return (
      <>
        <CurrencySelect onChange={this.onCurrencyChange} />
        <Card
          title={this.state.currency}
          subtitle={currencies[this.state.currency].code}
          icon={currencies[this.state.currency].icon}
          outlined={false}
          exchangable={false}
        />
        <SelectData currency={this.state.currency} />
        <CurrencyChart currency={this.state.currency} />
        <Popup />
      </>
    );
  }
}

export default TimelinePage;
