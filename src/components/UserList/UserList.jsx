import React from 'react';
import styles from './UserList.module.css';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
const users = [
  {
    username: 'username',
    account: 'descriptiondescription',
    icon: `${user1}`,
  },
  { username: 'username', account: 'descriptiondescription', icon: `${user2}` },
  { username: 'username', account: 'descriptiondescription', icon: `${user3}` },
  { username: 'username', account: 'descriptiondescription', icon: `${user4}` },
];

const UserList = () => (
  <div className={styles.userListContainer}>
    <div className={styles.header}>
      <span className={styles.suggest}>Suggested for you</span>
      <span className={styles.seeAll}>See All</span>
    </div>
    {users.map((user, index) => (
      <div key={index} className={styles.user}>
        <img src={user.icon} className={styles.userIcon} />
        <div className={styles.userInfo}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.account}>{user.account}</span>
        </div>
        <button className={styles.followButton}>Follow</button>
      </div>
    ))}
  </div>
);

export default UserList;
