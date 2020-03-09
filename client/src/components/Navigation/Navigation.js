import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ items = [], theme = 'header' }) => (
  <ul className={styles[theme]}>
    {items.map(({ name, path }) => (
      <li className={styles.item} key={name}>
        <NavLink
          exact
          to={path}
          className={styles.link}
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
