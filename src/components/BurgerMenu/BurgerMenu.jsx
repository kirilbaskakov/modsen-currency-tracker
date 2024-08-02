import React, { useState } from 'react';
import {
  Burger,
  Dropdown,
  DropdownItem,
  DropdownLink,
  Line,
  Overlay,
  Wrapper
} from './styled';
import ThemeButton from '../ThemeButton/ThemeButton';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchIsOpen = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <Wrapper>
      <Burger onClick={switchIsOpen}>
        <Line />
        <Line />
        <Line />
      </Burger>
      {isOpen && <Overlay onClick={switchIsOpen} />}
      <Dropdown $isOpen={isOpen}>
        <DropdownItem to="/" onClick={switchIsOpen}>
          Home
        </DropdownItem>
        <DropdownItem to="/timeline" onClick={switchIsOpen}>
          Timeline
        </DropdownItem>
        <DropdownItem to="/banks" onClick={switchIsOpen}>
          Bank map
        </DropdownItem>
        <DropdownItem to="/contacts" onClick={switchIsOpen}>
          Contact us
        </DropdownItem>
        <DropdownItem>
          <ThemeButton />
        </DropdownItem>
      </Dropdown>
    </Wrapper>
  );
};

export default BurgerMenu;
