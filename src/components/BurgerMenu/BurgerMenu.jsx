import React, { useState } from 'react';

import routes from '@/constants/routes';

import ThemeButton from '../ThemeButton/ThemeButton';
import {
  Burger,
  Dropdown,
  DropdownItem,
  Line,
  Overlay,
  Wrapper
} from './styled';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const switchIsOpen = () => {
    setIsOpen(isOpen => {
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
      return !isOpen;
    });
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
        {routes.map(({ path, name }) => (
          <DropdownItem to={path} onClick={switchIsOpen}>
            {name}
          </DropdownItem>
        ))}
        <DropdownItem>
          <ThemeButton />
        </DropdownItem>
      </Dropdown>
    </Wrapper>
  );
}

export default BurgerMenu;
