import { Component } from 'react';
import SelectDataModal from '../SelectDataModal/SelectDataModal';
import { Button } from './styled';

class SelectData extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick() {
    this.setState({ open: true });
  }

  onClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <Button onClick={this.onClick}>Select data</Button>
        {this.state.open && (
          <SelectDataModal
            open={this.state.open}
            onClose={this.onClose}
            currency={this.props.currency}
          />
        )}
      </>
    );
  }
}

export default SelectData;
