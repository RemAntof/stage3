import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import Animal from '@interfaces/animal';
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
  },
});
export const { addItem, removeItem } =
  itemsSelectedSlice.actions;
export default itemsSelectedSlice.reducer;
