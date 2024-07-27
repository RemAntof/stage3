import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeContext } from 'src/App';
import {
  useAppSelector,
  useAppDispatch,
} from '@hooks/useDispatchUseSelector';
import {
  addItem,
  removeItem,
} from '@components/flyout/cardsSlice';
import CheckBox from './checkbox';

jest.mock('@hooks/useDispatchUseSelector', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('@components/flyout/cardsSlice', () => ({
  addItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe('CheckBox Snapshot Tests', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(
      mockDispatch
    );
  });

  test('renders with light theme and checkbox unchecked', () => {
    (useAppSelector as jest.Mock).mockReturnValue({});

    const { asFragment } = render(
      <ThemeContext.Provider value="light">
        <CheckBox
          animal={{
            uid: 'ANMA0000005771',
            name: 'Andorian redbat',
            earthAnimal: false,
            earthInsect: false,
            avian: false,
            canine: false,
            feline: false,
          }}
        />
      </ThemeContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with dark theme and checkbox checked', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      ANMA0000005771: true,
    });

    const { asFragment } = render(
      <ThemeContext.Provider value="dark">
        <CheckBox
          animal={{
            uid: 'ANMA0000005771',
            name: 'Andorian redbat',
            earthAnimal: false,
            earthInsect: false,
            avian: false,
            canine: false,
            feline: false,
          }}
        />
      </ThemeContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('toggles checkbox state and dispatches actions', () => {
    (useAppSelector as jest.Mock).mockReturnValue({});

    const { getByRole } = render(
      <ThemeContext.Provider value="light">
        <CheckBox
          animal={{
            uid: 'ANMA0000005771',
            name: 'Andorian redbat',
            earthAnimal: false,
            earthInsect: false,
            avian: false,
            canine: false,
            feline: false,
          }}
        />
      </ThemeContext.Provider>
    );

    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith(
      addItem({
        uid: 'ANMA0000005771',
        name: 'Andorian redbat',
        earthAnimal: false,
        earthInsect: false,
        avian: false,
        canine: false,
        feline: false,
      })
    );

    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith(
      removeItem({
        uid: 'ANMA0000005771',
        name: 'Andorian redbat',
        earthAnimal: false,
        earthInsect: false,
        avian: false,
        canine: false,
        feline: false,
      })
    );
  });
});
