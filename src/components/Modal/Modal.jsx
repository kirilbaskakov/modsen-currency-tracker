import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './styled';

class Modal extends Component {
  render() {
    if (!this.props.open) {
      return null;
    }
    return createPortal(
      <>
        <ModalStyled {...this.props}>{this.props.children}</ModalStyled>
        <Overlay onClick={this.props.onClose} />
      </>,
      document.body
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
};

export default Modal;
