import {
  Buttons,
  CancelButton,
  ConfirmButton,
  Container,
  DateInput,
  DateLabel,
  Grid,
  Label,
  NumberInput,
  Title
} from './styled';
import Modal from '../Modal/Modal';
import { Component, Fragment } from 'react';
import toDateInput from '../../utiils/toDateInput';
import genChartData from '../../utiils/genChartData';

class SelectDataModal extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      data: [{ x: new Date(), o: 0, c: 0, l: 0, h: 0 }]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.onSave = this.onSave.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  addItem() {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          x: new Date(
            new Date(data.at(-1).x).setDate(data.at(-1).x.getDate() + 1)
          ),
          o: 0,
          c: 0,
          l: 0,
          h: 0
        }
      ]
    }));
  }

  deleteItem(id) {
    return () => {
      if (this.state.data.length == 1) {
        return;
      }
      this.setState({
        data: this.state.data.filter(item => item.x !== id)
      });
    };
  }

  changeItem(id, key) {
    return e =>
      this.setState(({ data }) => ({
        data: data.map(item =>
          item.x === id ? { ...item, [key]: e.target.value } : item
        )
      }));
  }

  changeDate(e) {
    const date = new Date(e.target.value);
    this.setState(state => ({
      startDate: date,
      data: state.data.map(({ x, ...other }, index) => ({
        ...other,
        x: new Date(new Date(date).setDate(date.getDate() + index))
      }))
    }));
  }

  onSave() {
    this.props.setData(this.state.data);
    this.props.onClose();
  }

  randomize() {
    this.setState({ data: genChartData(this.state.data.length) });
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Title>Select data ({this.props.currency})</Title>
        <DateLabel>Start date</DateLabel>
        <DateInput
          type="date"
          onChange={this.changeDate}
          value={toDateInput(this.state.startDate)}
        />
        <Container>
          <ConfirmButton onClick={this.randomize}>Randomize</ConfirmButton>
          <Grid>
            <Label>Open</Label>
            <Label>Close</Label>
            <Label>Low</Label>
            <Label>High</Label>
            <Label>Date</Label>
            <div></div>
            {this.state.data.map(({ x, o, h, l, c }) => (
              <Fragment key={x.toLocaleDateString()}>
                <NumberInput value={o} onChange={this.changeItem(x, 'o')} />
                <NumberInput value={c} onChange={this.changeItem(x, 'c')} />
                <NumberInput value={l} onChange={this.changeItem(x, 'l')} />
                <NumberInput value={h} onChange={this.changeItem(x, 'h')} />
                <span>{x.toLocaleDateString()}</span>
                <CancelButton onClick={this.deleteItem(x)}>Delete</CancelButton>
              </Fragment>
            ))}
          </Grid>
          <ConfirmButton onClick={this.addItem}>Add</ConfirmButton>
        </Container>
        <Buttons>
          <ConfirmButton onClick={this.onSave}>Save</ConfirmButton>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
        </Buttons>
      </Modal>
    );
  }
}

export default SelectDataModal;
