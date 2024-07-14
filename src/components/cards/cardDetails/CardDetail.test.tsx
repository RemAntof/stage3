import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CardDetail from './CardDetail';
import fetchApi from '@services/API/fetchApi';

jest.mock('@services/API/fetchApi');
const mockFetchApi = fetchApi as jest.MockedFunction<
  typeof fetchApi
>;

describe('CardDetail component', () => {
  it('renders correctly when animal is fetched', async () => {
    mockFetchApi.mockResolvedValueOnce({
      page: {
        pageNumber: 1,
        pageSize: 20,
        numberOfElements: 1,
        totalElements: 1,
        totalPages: 1,
        firstPage: true,
        lastPage: false,
      },
      sort: {
        clauses: [],
      },
      animals: [
        {
          uid: '1',
          name: 'Test Animal',
          earthAnimal: true,
          earthInsect: false,
          avian: false,
          canine: true,
          feline: false,
        },
      ],
    });

    const { container, findByText } = render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route
            path="/:animalName"
            element={<CardDetail />}
          />
        </Routes>
      </MemoryRouter>
    );

    await findByText('Test Animal');

    expect(container).toMatchSnapshot();
  });

  it('renders error message when fetch fails', async () => {
    mockFetchApi.mockRejectedValueOnce(
      new Error('Fetch failed')
    );

    const { container, findByText } = render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route
            path="/:animalName"
            element={<CardDetail />}
          />
        </Routes>
      </MemoryRouter>
    );

    await findByText('Error: Fetch failed');

    expect(container).toMatchSnapshot();
  });
});
