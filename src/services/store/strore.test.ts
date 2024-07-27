import { configureStore } from '@reduxjs/toolkit';
import api from '@services/API/redux';
import itemsSelectedReducer from '@components/flyout/cardsSlice';
import { RootState } from './store';

describe('Redux Store', () => {
  it('should match the snapshot', () => {
    const storeInstance = configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
        itemsSelected: itemsSelectedReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    });
    const state: RootState = storeInstance.getState();
    expect(state).toMatchSnapshot();
  });
});
