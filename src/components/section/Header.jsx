import React from 'react'
import Hlogo from '../header/Hlogo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
  return (
    <header id="header" role="banner">
        <Hlogo />
        <Menu />
        <Sns />
    </header>
  )
}

export default Header
