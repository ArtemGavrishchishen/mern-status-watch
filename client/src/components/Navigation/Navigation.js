import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ items = [] }) => (
  <ul className="list">
    {items.map(({ name, path }) => (
      <li key={name}>
        <NavLink exact to={path} className="link" activeClassName="active">
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
