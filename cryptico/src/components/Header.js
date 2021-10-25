import React from 'react';
import classes from './Header.module.css';
const Header = () => {
  return (
    <h1 className={classes.title}>
      Cryp<span style={{ color: 'red' }}>tico</span>
    </h1>
  );
};

export default Header;
