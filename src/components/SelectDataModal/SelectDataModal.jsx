import {
  Buttons,
  CancelButton,
  ConfirmButton,
  DateInput,
  DateLabel,
  Title
} from './styled';
import Modal from '../Modal/Modal';
import { Component } from 'react';
import toDateInput from '@/utils/toDateInput';
import { DataContext } from '@/context/DataContext';
import DataTable from '../DataTable/DataTable';

class SelectDataModal extends Component {
  static contextType = DataContext;

  constructor() {
    super();
    this.changeDate = this.changeDate.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  changeDate(e) {
    const date = new Date(e.target.value);
    this.context.changeDate(date);
  }

  onSave() {
    this.context.save();
    this.props.onClose();
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Title>Select data ({this.context.currency})</Title>
        <DateLabel>Start date</DateLabel>
        <DateInput
          type="date"
          onChange={this.changeDate}
          value={toDateInput(this.context.data[0].x)}
        />
        <DataTable />
        <Buttons>
          <ConfirmButton onClick={this.onSave}>Save</ConfirmButton>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
        </Buttons>
      </Modal>
    );
  }
}

export default SelectDataModal;
