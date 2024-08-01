import React, { Component } from 'react';
import Map from '@/components/Map/Map';
import Search from '@/components/Search/Search';
import { currencies } from '@/constants/currenciesData';

class BankMapPage extends Component {
  constructor() {
    super();
    this.state = { currency: '' };
    this.onVariantChange = this.onVariantChange.bind(this);
  }

  onVariantChange(variant) {
    this.setState({ currency: variant });
  }

  render() {
    return (
      <>
        <Search
          values={Object.keys(currencies)}
          onVariantChange={this.onVariantChange}
        />
        <Map currency={this.state.currency} />
      </>
    );
  }
}

export default BankMapPage;
