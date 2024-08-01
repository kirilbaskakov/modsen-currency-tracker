import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Arrow,
  GroupLink,
  Links,
  LinksGroupStyled,
  LinksTitle,
  TitleContainer
} from './styled';
import DropdownArrow from '@/assets/dropdown-arrow.svg';

const LinksGroup = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(isOpen => !isOpen);
  return (
    <LinksGroupStyled>
      <TitleContainer onClick={onClick}>
        <LinksTitle>{title}</LinksTitle>
        <Arrow src={DropdownArrow} rotated={!isOpen} />
      </TitleContainer>
      <Links isOpen={isOpen}>
        {links.map(link => (
          <GroupLink key={link}>{link}</GroupLink>
        ))}
      </Links>
    </LinksGroupStyled>
  );
};

LinksGroup.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LinksGroup;
