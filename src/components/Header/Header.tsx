import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../constants';
import s from './Header.module.scss';

const Header: React.FC = () => (
  <header>
    <div className={s.headerContainer}>
      <NavLink to="/">
        <img src="../assets/images/icon.png" alt="logo" height={40} />
      </NavLink>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
export default Header;
