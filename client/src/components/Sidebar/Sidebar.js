import React from 'react';

import Navigation from '../Navigation';

import navigation from '../../configs/navigations';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, items = [], onClose }) => {
  return (
    isOpen && (
      <div className={styles.sidebar}>
        <div className={styles.container}>
          <ul className={styles.burger} onClick={onClose}>
            <li className={styles.icon}></li>
            <li className={styles.icon}></li>
          </ul>
          <Navigation items={navigation} theme="sidebar" />
        </div>
      </div>
    )
  );
};

export default Sidebar;
