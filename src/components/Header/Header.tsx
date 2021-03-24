import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header: React.FC = () => (
  <header>
    <div className={s.headerContainer}>
    <NavLink to="/"><img src='src/assets/images/icon.png' alt="" height={40} /></NavLink>
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li><span>|</span>
        <li><NavLink to="/teams">Teams</NavLink></li><span>|</span>
        <li><NavLink to="/not-found">Stats</NavLink></li><span>|</span>
        <li><NavLink to="/not-found">Players</NavLink></li><span>|</span>
        <li><NavLink to="/not-found">Season Averages</NavLink></li>
      </ul>
    </div>
  </header>
);
export default Header;