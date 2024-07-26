import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/useDispatchUseSelector';
import styles from './checkbox.module.css';
import CardProp from '@interfaces/cardProp';
import { useCallback, useEffect } from 'react';
import {
  addItem,
  removeItem,
} from '@components/flyout/cardsSlice';

const CheckBox: React.FC<CardProp> = ({ animal }) => {
  const items = useAppSelector(
    (state) => state.itemsSelected.items
  );
  const dispatch = useAppDispatch();
  let isSelected = items[animal.uid] ? true : false;

  const toggleDispatch = useCallback(
    (isChecked) => {
      if (isChecked) {
        if (!items[animal.uid]) {
          dispatch(addItem(animal));
        }
      } else {
        if (items[animal.uid]) {
          dispatch(removeItem(animal));
        }
      }
    },
    [animal, dispatch, items]
  );

  const handleChange = () => {
    isSelected = !isSelected;
    toggleDispatch(isSelected);
  };

  useEffect(() => {
    toggleDispatch(isSelected);
  }, [isSelected, toggleDispatch]);

  return (
    <input
      type="checkbox"
      className={styles.checkBox}
      checked={isSelected}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
