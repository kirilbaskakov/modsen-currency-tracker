import { Component } from 'react';
import { Overlay, ModalStyled } from './styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

class Modal extends Component {
  constructor() {
    super();
  }

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
