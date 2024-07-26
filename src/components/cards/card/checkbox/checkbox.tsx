import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/useDispatchUseSelector';
import styles from './checkbox.module.css';
import CardProp from '@interfaces/cardProp';
import { useEffect, useState } from 'react';
import {
  addItem,
  removeItem,
} from '@components/flyout/cardsSlice';

const CheckBox: React.FC<CardProp> = ({ animal }) => {
  const items = useAppSelector(
    (state) => state.itemsSelected.items
  );
  const dispatch = useAppDispatch();
  const isSelected = items[animal.uid] ? true : false;

  const [isChecked, setIsChecked] = useState(isSelected);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    if (isChecked) {
      if (!items[animal.uid]) {
        dispatch(addItem(animal));
      }
    } else {
      if (items[animal.uid]) {
        dispatch(removeItem(animal));
      }
    }
  }, [isChecked, animal, items, dispatch]);

  return (
    <input
      type="checkbox"
      className={styles.checkBox}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
