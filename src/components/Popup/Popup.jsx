import { Component } from 'react';
import { createPortal } from 'react-dom';

import observable from '@/context/observable';

import { PopupStyled } from './styled';

class Popup extends Component {
  constructor() {
    super();
    this.state = { isVisible: false, isSuccess: false };
    this.onDataChange = this.onDataChange.bind(this);
  }

  componentDidMount() {
    observable.subscribe(this.onDataChange);
  }

  componentWillUnmount() {
    observable.unsubscribe(this.onDataChange);
  }

  onDataChange({ data, isDefault }) {
    if (isDefault) {
      return;
    }
    if (data.length === 30) {
      this.setState({ isVisible: true, isSuccess: true });
    } else {
      this.setState({ isVisible: true, isSuccess: false });
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(
      () => this.setState({ isVisible: false }),
      2000
    );
  }

  render() {
    return createPortal(
      <PopupStyled
        $isVisible={this.state.isVisible}
        $isSuccess={this.state.isSuccess}
      >
        {this.state.isSuccess
          ? 'The chart has been successfully built!'
          : 'Error! The chart data must be for exactly 30 days'}
      </PopupStyled>,
      document.body
    );
  }
}

export default Popup;
