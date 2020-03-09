import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import Social from '../Social';
import PhoneBlock from '../PhoneBlock';

import navigation from '../../configs/navigations';
import styles from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <Logo theme="footer" />
              <Navigation items={navigation} theme="footer" />
            </div>
            <div className={styles.social}>
              <Social />
            </div>
            <div className={styles.phone}>
              <PhoneBlock />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>Copyright © 2019</div>
    </footer>
  );
};

export default AppFooter;
