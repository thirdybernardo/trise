import React from 'react';
import styles from './Menu.module.css';
import homeOne from '../../assets/Home.png';
import following from '../../assets/user.png';
import booko from '../../assets/booko.png';
import compass from '../../assets/compass.png';
import bar from '../../assets/bar.png';
import ellipse from '../../assets/ellipse.png';
const Menu = () => (
  <ul className={styles.menuList}>
    <li>
      <img className={styles.icon} src={homeOne} />
      Home
    </li>
    <li>
      <img className={styles.icon} src={following} />
      Following
    </li>
    <li>
      <img className={styles.icon} src={compass} />
      Explore
    </li>
    <li>
      <img className={styles.icon} src={booko} />
      Courses
    </li>
    <li>
      <img className={styles.icon} src={bar} />
      ChartCharts
    </li>
    <li>
      <img className={styles.icon} src={ellipse} />
      Profile
    </li>
  </ul>
);

export default Menu;
