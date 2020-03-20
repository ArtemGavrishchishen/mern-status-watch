import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Navigation from '../Navigation';

import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, items = [], onClose }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.enter,
        enterDone: styles.enterDone,
        exit: styles.exit
      }}
      unmountOnExit
    >
      <div className={styles.sidebar}>
        <div className={styles.container}>
          <ul className={styles.burger} onClick={onClose}>
            <li className={styles.icon}></li>
            <li className={styles.icon}></li>
          </ul>
          <Navigation items={items} theme="sidebar" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
