import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsSelectedReducer from './cardsSlice';
import Flyout from './flyout';
jest.mock('@services/exportToCsv/exportToCsv', () =>
  jest.fn()
);

const store = configureStore({
  reducer: {
    itemsSelected: itemsSelectedReducer,
  },
});

describe('Flyout Component', () => {
  test('matches snapshot when items are present', () => {
    store.dispatch({
      type: 'itemsSelected/addItem',
      payload: {
        uid: 'ANMA0000005771',
        name: 'Andorian redbat',
        earthAnimal: false,
        earthInsect: false,
        avian: false,
        canine: false,
        feline: false,
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot when no items are present', () => {
    store.dispatch({
      type: 'itemsSelected/removeAllItems',
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
