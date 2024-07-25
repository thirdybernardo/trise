import React from 'react';
import smallBanOne from '../../assets/smallBanOne.png';
import mphone from '../../assets/mphone.png';
import comp from '../../assets/comp.png';
import bit from '../../assets/bitcoin.png';
import smallphone from '../../assets/smallphone.png';
import bitg from '../../assets/bitg.png';
import bitg1 from '../../assets/bitg1.png';
import styles from './ImageGallery.module.css';

const ImageGallery = () => (
  <div className={styles.imageContainer}>
    <div className={styles.imageWrapper}>
      <img src={smallBanOne} alt="Image 1" className={styles.image} />
    </div>
    <div className={styles.imageWrapper}>
      <img src={bit} alt="Image 1" className={styles.image} />
      <img src={bitg1} alt="Small Image 1" className={styles.smallImage} />
    </div>
    <div className={styles.imageWrapper}>
      <img src={comp} alt="Image 2" className={styles.image} />
      <img src={bitg} alt="Small Image 2" className={styles.smallImage} />
    </div>
    <div className={styles.imageWrapper}>
      <img src={mphone} alt="Image 3" className={styles.image} />
      <img src={smallphone} alt="Small Image 3" className={styles.smallImage} />
    </div>
  </div>
);

export default ImageGallery;
