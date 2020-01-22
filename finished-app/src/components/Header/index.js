import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderWrapper } from './Header.css.js';

const Header = () => {
  const { pathname } = useLocation();
  const title = pathname.includes('pokemon') ? 'Pokemon' : 'Pokedex';
  return <HeaderWrapper>{title}</HeaderWrapper>;
};

export default Header;
