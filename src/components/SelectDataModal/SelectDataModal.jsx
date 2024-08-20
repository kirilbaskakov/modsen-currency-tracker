import { PropTypes } from 'prop-types';
import { Component } from 'react';

import observable from '@/context/observable';
import toDateInput from '@/utils/toDateInput';

import addDays from '../../utils/addDays/index';
import getDataFromStorage from '../../utils/getDataFromStorage';
import DataTable from '../DataTable/DataTable';
import Modal from '../Modal/Modal';
import {
  Buttons,
  CancelButton,
  ConfirmButton,
  DateInput,
  DateLabel,
  Title
} from './styled';

class SelectDataModal extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          x: new Date(),
          o: 0,
          c: 0,
          l: 0,
          h: 0
        }
      ]
    };
    this.changeDate = this.changeDate.bind(this);
    this.onSave = this.onSave.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: getDataFromStorage(this.props.currency, {
        x: new Date(),
        o: 0,
        c: 0,
        l: 0,
        h: 0
      })
    });
  }

  onSave() {
    localStorage.setItem(this.props.currency, JSON.stringify(this.state.data));
    observable.notify({ data: this.state.data, isDefault: false });
    this.props.onClose();
  }

  setData(newData) {
    if (typeof newData === 'object') {
      return this.setState({ data: newData });
    }
    return this.setState(({ data }) => ({ data: newData(data) }));
  }

  changeDate(e) {
    const date = new Date(e.target.value);
    this.setState(({ data }) => ({
      data: data.map((item, index) => ({ ...item, x: addDays(date, index) }))
    }));
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Title>Select data ({this.props.currency})</Title>
        <DateLabel>Start date</DateLabel>
        <DateInput
          type="date"
          onChange={this.changeDate}
          value={toDateInput(this.state.data[0].x)}
        />
        <DataTable data={this.state.data} setData={this.setData} />
        <Buttons>
          <ConfirmButton onClick={this.onSave}>Save</ConfirmButton>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
        </Buttons>
      </Modal>
    );
  }
}

SelectDataModal.props = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  currency: PropTypes.string
};
export default SelectDataModal;
