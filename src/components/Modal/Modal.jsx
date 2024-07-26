import { Component } from 'react';
import { Overlay, ModalStyled } from './styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    return (
      <>
        <ModalStyled>{this.props.children}</ModalStyled>
        <Overlay onClick={this.props.onClose} />
      </>
    );
  }
}

export default Modal;
