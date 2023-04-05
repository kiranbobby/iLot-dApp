import React from 'react';
import styles from './LoadingBoxes.module.scss';

export const LoadingBoxes = () => {
  return (
    <div className={styles.boxes}>
      <div className={styles.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
