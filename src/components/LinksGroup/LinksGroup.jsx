import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const LinksGroup = ({ title, links }) => {
  return (
    <S.LinksGroup>
      <S.LinksTitle>{title}</S.LinksTitle>
      {links.map(link => (
        <S.GroupLink key={link}>{link}</S.GroupLink>
      ))}
    </S.LinksGroup>
  );
};

LinksGroup.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LinksGroup;
