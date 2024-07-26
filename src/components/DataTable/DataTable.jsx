import { Component, Fragment } from 'react';
import {
  AmountInput,
  CancelButton,
  ConfirmButton,
  Container,
  Grid,
  GridButtons,
  Label,
  NumberInput
} from './styled';
import { DataContext } from '../../context/DataContext';

class DataTable extends Component {
  static contextType = DataContext;

  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(e) {
    this.context.changeAmount(e.target.value);
  }

  deleteItem(id) {
    return () => this.context.deleteItem(id);
  }

  changeItem(id, key) {
    return e => this.context.changeItem(id, key);
  }

  render() {
    return (
      <Container>
        <Label>Amount</Label>
        <AmountInput
          type="number"
          max={30}
          min={1}
          onChange={this.onAmountChange}
          value={this.context.data.length}
        />
        <GridButtons>
          <ConfirmButton onClick={this.context.randomize}>
            Randomize
          </ConfirmButton>
          <CancelButton onClick={this.context.clear}>Clear</CancelButton>
        </GridButtons>
        <Grid>
          <Label>Open</Label>
          <Label>Close</Label>
          <Label>Low</Label>
          <Label>High</Label>
          <Label>Date</Label>
          <div></div>
          {this.context.data.map(({ x, o, h, l, c }) => (
            <Fragment key={x.toLocaleDateString()}>
              <NumberInput value={o} onChange={this.changeItem(x, 'o')} />
              <NumberInput value={c} onChange={this.changeItem(x, 'c')} />
              <NumberInput value={l} onChange={this.changeItem(x, 'l')} />
              <NumberInput value={h} onChange={this.changeItem(x, 'h')} />
              <Label>{x.toLocaleDateString()}</Label>
              <CancelButton onClick={this.deleteItem(x)}>Delete</CancelButton>
            </Fragment>
          ))}
        </Grid>
        <ConfirmButton onClick={this.context.addItem}>Add</ConfirmButton>
      </Container>
    );
  }
}

export default DataTable;
