import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={style.navigation}>
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={style.link}
        activeClassName={style.active}
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
