import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Search component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls setLocalStorage and navigates correctly on form submission', () => {
    const setLocalStorageMock = jest.fn();
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(
      navigateMock
    );

    render(
      <Search
        setLocalStorage={setLocalStorageMock}
        localStorage={'initialValue'}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      'Search...'
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'search term' },
    });

    const buttonElement = screen.getByRole('button', {
      name: /Search/i,
    });
    fireEvent.click(buttonElement);

    expect(setLocalStorageMock).toHaveBeenCalledWith(
      'search term'
    );

    expect(navigateMock).toHaveBeenCalledWith(
      `/?page=1&search=${encodeURIComponent('search term')}`
    );
  });
});
