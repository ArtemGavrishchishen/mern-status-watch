import React, { useState } from 'react';

import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import UserIcon from '../UserIcon';
import CartIcon from '../CartIcon';
import Logo from '../Logo';
import Advantages from '../Advantages';
import PhoneBlock from '../PhoneBlock';

import navigation from '../../configs/navigations';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  const [isSidebarOpen, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.topContent}>
            <div className={styles.desktop}>
              <Navigation items={navigation} />
            </div>

            <div className={styles.mobile}>
              <ul className={styles.burger} onClick={openSidebar}>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
              </ul>
              <Sidebar
                isOpen={isSidebarOpen}
                items={navigation}
                onClose={closeSidebar}
              />
            </div>

            <div className={styles.user}>
              <UserIcon />
              <CartIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.bodyContent}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.phone}>
              <PhoneBlock />
            </div>
            <Advantages />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
