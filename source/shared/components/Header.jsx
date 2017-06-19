import React from 'react';
import { Link } from 'react-router';

import styles from './Header.css'


function Header(){
  return (
    <header className={styles.header}>
      <h1 className={styles.title}> Mi primera app con React</h1>
      <nav role="navigation" className={styles.navigation}>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>

      <a className={styles.link} href="http://google.com" target="_blank">google</a>
      </nav>
    </header>
  )
}

export default Header;