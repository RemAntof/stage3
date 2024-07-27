import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardDetail from './CardDetail';

import { useAnimalDetailsQuery } from '@services/API/redux';

jest.mock('@services/API/redux', () => ({
  useAnimalDetailsQuery: jest.fn(),
}));

jest.mock('@components/loader/loader', () => () => (
  <div>Loading...</div>
));
jest.mock('@views/errorView/errorView', () => () => (
  <div>Error occurred</div>
));
jest.mock('../card/card', () => ({ animal }) => (
  <div>Card for {animal.name}</div>
));

describe('CardDetail Snapshot Tests', () => {
  test('renders loading state correctly', () => {
    (useAnimalDetailsQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      data: null,
    });

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/animals/lion']}>
        <CardDetail />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders error state correctly', () => {
    (useAnimalDetailsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      data: null,
    });

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/animals/lion']}>
        <CardDetail />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders data state correctly', () => {
    (useAnimalDetailsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        animals: [
          {
            name: 'Lion',
            description: 'King of the jungle',
          },
        ],
      },
    });

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/animals/lion']}>
        <CardDetail />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
