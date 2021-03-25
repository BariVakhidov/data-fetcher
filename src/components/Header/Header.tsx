import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const listItems = [
  { to: '/dashboard', name: 'Dashboard' },
  { to: '/teams', name: 'Teams' },
  { to: '/not-found', name: 'Stats' },
  { to: '/not-found', name: 'Players' },
  { to: '/not-found', name: 'Season Averages' },
];

const Header: React.FC = () => (
  <header>
    <div className={s.headerContainer}>
      <NavLink to="/">
        <img src="../assets/images/icon.png" alt="logo" height={40} />
      </NavLink>
      <ul>
        {listItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
export default Header;
