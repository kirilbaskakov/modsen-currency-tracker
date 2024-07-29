import { Component } from 'react';
import { PopupStyled } from './styled';
import { createPortal } from 'react-dom';
import Observable from '@/context/Observable';

class Popup extends Component {
  constructor() {
    super();
    this.state = { isVisible: false, isSuccess: false };
    this.onDataChange = this.onDataChange.bind(this);
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

  componentDidMount() {
    Observable.subscribe(this.onDataChange);
  }

  componentWillUnmount() {
    Observable.unsubscribe(this.onDataChange);
  }

  render() {
    return createPortal(
      <PopupStyled
        isVisible={this.state.isVisible}
        isSuccess={this.state.isSuccess}
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
