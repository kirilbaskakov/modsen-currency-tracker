import React from 'react';
import Logo from '../../assets/logo-small.svg';
import * as S from './styled';
import LinksGroup from '../LinksGroup/LinksGroup';

const Footer = () => {
  const links = [
    { title: 'General', links: ['Market', 'Service'] },
    { title: 'Product', links: ['Sparks', 'Snaps'] },
    { title: 'Community', links: ['Ideas', 'Streams'] }
  ];
  return (
    <S.Footer>
      <S.FooterContent>
        <S.Text>
          <S.Title>
            <S.Logo src={Logo} /> Modsen Currency Tracker
          </S.Title>
          <S.Description>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </S.Description>
        </S.Text>
        {links.map(({ title, links }) => (
          <LinksGroup title={title} links={links} key={title} />
        ))}
      </S.FooterContent>
      <S.Rights>Startsup © 2023-2024, All Rights Reserved</S.Rights>
    </S.Footer>
  );
};

export default Footer;
