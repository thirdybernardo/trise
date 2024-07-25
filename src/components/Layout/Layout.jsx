import React from 'react';
import Menu from '../Menu/Menu';
import ImageGallery from '../ImageGallery/ImageGallery';
import UserList from '../UserList/UserList';
import AdditionalContainer from '../AdditionalContainer/AdditionalContainer';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <Menu />
    </div>
    <div className={styles.column}>
      <ImageGallery />
      <AdditionalContainer />
    </div>
    <div className={styles.column}>
      <UserList />
    </div>
  </div>
);

export default Layout;
