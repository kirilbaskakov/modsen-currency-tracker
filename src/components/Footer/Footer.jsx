import React from 'react';
import Logo from '@/assets/logo-small.svg';
import LinksGroup from '../LinksGroup/LinksGroup';
import {
  Description,
  FooterContent,
  FooterStyled,
  LogoStyled,
  Rights,
  Text,
  Title
} from './styled';

const Footer = () => {
  const links = [
    { title: 'General', links: ['Market', 'Service'] },
    { title: 'Product', links: ['Sparks', 'Snaps'] },
    { title: 'Community', links: ['Ideas', 'Streams'] }
  ];
  return (
    <FooterStyled>
      <FooterContent>
        <Text>
          <Title>
            <LogoStyled src={Logo} /> Modsen Currency Tracker
          </Title>
          <Description>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </Description>
        </Text>
        {links.map(({ title, links }) => (
          <LinksGroup title={title} links={links} key={title} />
        ))}
      </FooterContent>
      <Rights>Startsup © 2023-2024, All Rights Reserved</Rights>
    </FooterStyled>
  );
};

export default Footer;
