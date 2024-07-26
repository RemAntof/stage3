import {
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import Animal from '@interfaces/animal';
import { RootState } from '@services/store/store';
export interface ItemsSelectedState {
  items: { item: Animal };
}

const initialState: ItemsSelectedState = {
  items: {
    item: undefined,
  },
};

const itemsSelectedSlice = createSlice({
  name: 'itemsSelected',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Animal>) {
      const item = action.payload;
      state.items[item.uid] = item;
    },
    removeItem(state, action: PayloadAction<Animal>) {
      const item = action.payload;
      delete state.items[item.uid];
    },
    removeAllItems(state) {
      const items = state.items;
      for (const id in items) {
        delete items[id];
      }
    },
  },
});
export const { addItem, removeItem, removeAllItems } =
  itemsSelectedSlice.actions;
export default itemsSelectedSlice.reducer;

export const getNumItems = createSelector(
  (state: RootState) => state.itemsSelected.items,
  (items) => {
    let numItems = 0;
    for (const id in items) {
      if (items[id]) numItems++;
    }

    return numItems;
  }
);
