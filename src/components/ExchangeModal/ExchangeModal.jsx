import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import {
  Button,
  Container,
  Description,
  Highlighted,
  Input,
  InputContainer,
  ReadonlySelect,
  Separator,
  Title
} from './styled';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { currencyInfo } from '../../constants/currencyCards';

const ExchangeModal = ({ currency, open, onClose }) => {
  const [rates, setRates] = useState(null);
  const [resultCurrency, setResultCurrency] = useState(
    Object.keys(currencyInfo)[0]
  );
  const [value, setValue] = useState(1);

  const onCurrencyChange = e => setResultCurrency(e.target.value);

  const onButtonClick = () => onClose();

  const onValueChange = e => setValue(e.target.value);

  const fetchRate = () => {
    fetch(
      `https://api.currencyapi.com/v3/latest?base_currency=${currencyInfo[currency].code}`,
      {
        headers: {
          apikey: 'cur_live_czo7PpzJVlCwrYQSFJzUXB9L6y2K0LONWLVrR8bv'
        }
      }
    )
      .then(response => response.json())
      .then(({ data }) => setRates(data));
  };
  useEffect(() => {
    fetchRate();
  }, []);

  const rate = rates ? rates[currencyInfo[resultCurrency].code].value : 0;

  return (
    <Modal open={open} onClose={onClose}>
      <Title>Exchange</Title>
      <Container>
        <Description>
          1 {currency} is equal to
          <Highlighted>
            {rate} {resultCurrency}
          </Highlighted>
        </Description>
        <InputContainer>
          <Input value={value} onChange={onValueChange} type="number" />
          <Separator />
          <ReadonlySelect onChange={onCurrencyChange}>
            {currency}
          </ReadonlySelect>
        </InputContainer>
        <InputContainer>
          <Input value={value * rate} readOnly />
          <Separator />
          <CurrencySelect onChange={onCurrencyChange} />
        </InputContainer>
        <Button onClick={onButtonClick}>OK</Button>
      </Container>
    </Modal>
  );
};

export default ExchangeModal;
