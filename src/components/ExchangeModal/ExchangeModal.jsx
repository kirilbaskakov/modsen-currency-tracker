import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { currencies } from '@/constants/currenciesData';
import useRates from '@/hooks/useRates';

import CurrencySelect from '../CurrencySelect/CurrencySelect';
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

function ExchangeModal({ currency, open, onClose }) {
  const { rates, isLoading } = useRates(currencies[currency].code);
  const [resultCurrency, setResultCurrency] = useState(
    Object.keys(currencies)[0]
  );
  const [value, setValue] = useState(1);

  const onCurrencyChange = e => setResultCurrency(e.target.value);

  const onButtonClick = () => onClose();

  const onValueChange = e => setValue(e.target.value);

  const rate = !isLoading ? rates[currencies[resultCurrency].code]?.value : 0;

  return (
    <Modal open={open} onClose={onClose} data-testid="exchange-modal">
      <Title>Exchange</Title>
      <Container>
        <Description>
          1 {currency} is equal to
          <Highlighted>
            {isLoading ? 'Loading... ' : rate} {resultCurrency}
          </Highlighted>
        </Description>
        <InputContainer>
          <Input
            value={value}
            onChange={onValueChange}
            type="number"
            data-testid="exchange-input"
          />
          <Separator />
          <ReadonlySelect onChange={onCurrencyChange}>
            {currency}
          </ReadonlySelect>
        </InputContainer>
        <InputContainer>
          <Input value={value * rate} readOnly data-testid="exchange-result" />
          <Separator />
          <CurrencySelect onChange={onCurrencyChange} />
        </InputContainer>
        <Button onClick={onButtonClick}>OK</Button>
      </Container>
    </Modal>
  );
}

ExchangeModal.propTypes = {
  currency: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ExchangeModal;
