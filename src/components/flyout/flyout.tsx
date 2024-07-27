import React from 'react';
import styles from './flyout.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/useDispatchUseSelector';
import { getNumItems, removeAllItems } from './cardsSlice';
import exportToCsv from '@services/exportToCsv/exportToCsv';

const Flyout: React.FC = () => {
  const numItems = useAppSelector(getNumItems);
  const dispatch = useAppDispatch();
  const items = useAppSelector(
    (state) => state.itemsSelected.items
  );
  const isOpen = numItems > 0;
  const removeAllItemsHandler = () => {
    dispatch(removeAllItems());
  };

  const handleExportClick = () => {
    if (Object.keys(items).length !== 0) {
      exportToCsv(`${numItems}_animalList.csv`, items);
    }
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
      <button
        className={styles.closeButton}
        onClick={handleExportClick}
      >
        Download
      </button>
    </div>
  );
};

export default Flyout;
