import React from 'react';
import styles from './flyout.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/useDispatchUseSelector';
import { getNumItems, removeAllItems } from './cardsSlice';

const Flyout: React.FC = () => {
  const numItems = useAppSelector(getNumItems);
  const dispatch = useAppDispatch();
  const isOpen = numItems > 0;
  const removeAllItemsHandler = () => {
    dispatch(removeAllItems());
  };
  if (!isOpen) return null;
  return (
    <div className={styles.flyoutContainer}>
      <div className={styles.flyoutContent}>{numItems}</div>
      <button
        className={styles.closeButton}
        onClick={removeAllItemsHandler}
      >
        Remove All Items
      </button>
    </div>
  );
};

export default Flyout;
