import React, { Component } from 'react';
import CurrencySelect from '../components/CurrencySelect/CurrencySelect';
import Card from '../components/Card/Card';
import CurrencyChart from '../components/CurrencyChart/CurrencyChart';
import SelectData from '../components/SelectData/SelectData';
import { currencyInfo } from '../constants/currencyCards';
import Popup from '../components/Popup/Popup';

class TimelinePage extends Component {
  constructor() {
    super();
    this.state = { currency: Object.keys(currencyInfo)[0] };
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
          subtitle={currencyInfo[this.state.currency].code}
          icon={currencyInfo[this.state.currency].icon}
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
