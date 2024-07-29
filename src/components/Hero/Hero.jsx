import React from 'react';
import Logo from '@/assets/logo-large.svg';
import { Description, HeroStyled, LogoStyled, Text, Title } from './styled';

const Hero = () => {
  return (
    <HeroStyled>
      <Text>
        <Title>
          Modsen Currency <br />
          Tracker
        </Title>
        <Description>
          Quotes for the dollar and other <br />
          international currencies.
        </Description>
      </Text>

      <LogoStyled src={Logo} />
    </HeroStyled>
  );
};

export default Hero;
