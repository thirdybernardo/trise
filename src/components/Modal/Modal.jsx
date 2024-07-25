import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        {/* Add your modal content here */}
      </div>
    </div>
  );
};

export default Modal;
