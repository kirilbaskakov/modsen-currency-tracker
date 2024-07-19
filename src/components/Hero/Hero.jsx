import React from 'react';
import Logo from '../../assets/logo-large.svg';
import * as S from './styled';

const Hero = () => {
  return (
    <S.Hero>
      <S.Text>
        <S.Title>
          Modsen Currency <br />
          Tracker
        </S.Title>
        <S.Description>
          Quotes for the dollar and other <br />
          international currencies.
        </S.Description>
      </S.Text>

      <S.Logo src={Logo} />
    </S.Hero>
  );
};

export default Hero;
