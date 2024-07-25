import React, { useState, useRef } from 'react';
import styles from './AdditionalContainer.module.css';
import lewis from '../../assets/lewis.png';
import bread from '../../assets/bread.png';
import close from '../../assets/close.png';
import arrow from '../../assets/arrow.png';
import ashare from '../../assets/ashare.png';
import asave from '../../assets/asave.png';
import asend from '../../assets/asend.png';
import layoutbg from '../../assets/layoutbg.png';
import abookmarks from '../../assets/abookmarks.png';
const AdditionalContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const iconRight1Ref = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      iconRight1Ref.current &&
      !iconRight1Ref.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.additionalContainer}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <img src={lewis} className={styles.icon} />
          <span className={styles.name}>lewishamilton</span>
          <span className={styles.hours}>5h</span>
        </div>
        <div className={styles.rightSection}>
          <img
            src={bread}
            alt="Right Icon 1"
            className={styles.icon}
            ref={iconRight1Ref}
            onClick={toggleDropdown}
          />
          <img src={close} alt="Right Icon 2" className={styles.icon} />
        </div>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown} ref={dropdownRef}>
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <img src={arrow} alt="Item Icon 1" className={styles.itemIcon} />
              <span>Reanalyze</span>
            </li>
            <li className={styles.dropdownItem}>
              <img src={ashare} alt="Item Icon 2" className={styles.itemIcon} />
              <span>Share</span>
            </li>
            <li className={styles.dropdownItem}>
              <img src={asave} alt="Item Icon 3" className={styles.itemIcon} />
              <span>Save</span>
            </li>
            <li className={styles.dropdownItem}>
              <img src={asend} alt="Item Icon 4" className={styles.itemIcon} />
              Send
            </li>
            <li className={styles.dropdownItem}>
              <img
                src={abookmarks}
                alt="Item Icon 5"
                className={styles.itemIcon}
              />
              Save
            </li>
          </ul>
        </div>
      )}
      <p className={styles.para}>What do you think about this analysis?</p>
      {/* Add more content here */}
      <img src={layoutbg} className={styles.containerW} />
    </div>
  );
};

export default AdditionalContainer;
