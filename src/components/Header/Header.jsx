import React from 'react';
import styles from './Header.module.css';
import tra from '../../assets/tra.png';
import eye from '../../assets/eye.png';
import buttonC from '../../assets/buttonC.png';
import messageC from '../../assets/messageC.png';
import profileC from '../../assets/profileC.png';

import searchIcon from '../../assets/search.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img src={eye} className={styles.logo} />
        <img src={tra} className={styles.icon} />
      </div>
      <div className={styles.middleSection}>
        <input type="text" placeholder="Search" className={styles.searchBox} />
        <div className={styles.verticalLine}></div>
        <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
      </div>
      <div className={styles.rightSection}>
        <img src={buttonC} className={styles.button} />
        <img src={messageC} className={styles.icon} />
        <img src={profileC} className={styles.icon3} />
      </div>
    </header>
  );
};

export default Header;
