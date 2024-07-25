import React from 'react';
import styles from './flyout.module.css';
import { useAppSelector } from '@hooks/useDispatchUseSelector';
import { getNumItems } from './cardsSlice';

const Flyout: React.FC = () => {
  const numItems = useAppSelector(getNumItems);
  const isOpen = numItems > 0;
  if (!isOpen) return null;
  return (
    <div className={styles.flyoutContainer}>
      <div className={styles.flyoutContent}>{numItems}</div>
      <button className={styles.closeButton}>Close</button>
    </div>
  );
};

export default Flyout;
