import { Component, Fragment } from 'react';
import {
  AmountInput,
  CancelButton,
  ConfirmButton,
  Container,
  Error,
  Grid,
  GridButtons,
  Label,
  NumberInput
} from './styled';
import addDays from '@/utils/addDays';
import genChartData from '@/utils/genChartData';

class DataTable extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.clear = this.clear.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  validate(items) {
    return items.every(
      item =>
        item.l <= Math.min(item.o, item.c) && item.h >= Math.max(item.o, item.c)
    );
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if (amount < this.props.data.length) {
      this.props.setData(this.props.data.slice(0, amount));
    } else {
      this.props.setData(
        this.props.data.concat(
          new Array(amount - this.props.data.length)
            .fill({})
            .map((_, index) =>
              this.createItem(addDays(this.props.data.at(-1).x, index))
            )
        )
      );
    }
  }

  createItem(lastDate) {
    return {
      x: addDays(lastDate, 1),
      o: 0,
      c: 0,
      l: 0,
      h: 0
    };
  }

  addItem() {
    this.props.setData(data => [...data, this.createItem(data.at(-1).x)]);
  }

  deleteItem(id) {
    return () => {
      if (this.props.data.length == 1) {
        return;
      }
      const startDate = this.props.data[0].x;
      this.props.setData(
        this.props.data
          .filter(item => item.x !== id)
          .map(({ x, ...other }, index, data) => ({
            x: addDays(startDate, index),
            ...other
          }))
      );
    };
  }

  changeItem(id, key) {
    return e =>
      this.props.setData(data =>
        data.map(item =>
          item.x === id ? { ...item, [key]: e.target.value } : item
        )
      );
  }

  clear() {
    this.props.setData(data => [
      {
        x: data[0].x,
        o: 0,
        c: 0,
        l: 0,
        h: 0
      }
    ]);
  }

  randomize() {
    this.props.setData(data => genChartData(data.length, data[0].x));
  }

  render() {
    const isError = !this.validate(this.props.data);

    return (
      <Container>
        <Label>Amount</Label>
        <AmountInput
          type="number"
          max={30}
          min={1}
          onChange={this.onAmountChange}
          value={this.props.data.length}
        />
        <GridButtons>
          <ConfirmButton onClick={this.randomize}>Randomize</ConfirmButton>
          <CancelButton onClick={this.clear}>Clear</CancelButton>
        </GridButtons>
        <Error isVisible={isError}>
          Low value must be lesser than open and close and high value must be
          greater
        </Error>
        <Grid>
          <Label>Open</Label>
          <Label>Close</Label>
          <Label>Low</Label>
          <Label>High</Label>
          <Label>Date</Label>
          <div></div>
          {this.props.data.map(({ x, o, h, l, c }) => (
            <Fragment key={x.toLocaleDateString()}>
              <NumberInput value={o} onChange={this.changeItem(x, 'o')} />
              <NumberInput value={c} onChange={this.changeItem(x, 'c')} />
              <NumberInput
                value={l}
                onChange={this.changeItem(x, 'l')}
                isError={l > Math.min(o, c)}
              />
              <NumberInput
                value={h}
                onChange={this.changeItem(x, 'h')}
                isError={h < Math.max(o, c)}
              />
              <Label>{x.toLocaleDateString()}</Label>
              <CancelButton onClick={this.deleteItem(x)}>Delete</CancelButton>
            </Fragment>
          ))}
        </Grid>
        <ConfirmButton onClick={this.addItem}>Add</ConfirmButton>
      </Container>
    );
  }
}

export default DataTable;
