import React from 'react';

import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Viber } from './assets/viber.svg';

import styles from './Social.module.css';

const socialIcons = [
  { name: Facebook, id: 'Facebook' },
  { name: Google, id: 'Google' },
  { name: Instagram, id: 'Instagram' },
  { name: Linkedin, id: 'Linkedin' },
  { name: Twitter, id: 'Twitter' },
  { name: Viber, id: 'Viber' }
];

const Social = () => (
  <div className={styles.social}>
    <h3 className={styles.title}>Share with friends</h3>
    <ul className={styles.list}>
      {socialIcons.map(icon => (
        <li key={icon.id}>
          <a className={styles.link} href="/">
            <icon.name />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Social;
