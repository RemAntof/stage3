import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import ErrorPage from '@views/errorView/errorView';
import CardDetail from '@components/cards/cardDetails/CardDetail';
import { Provider } from 'react-redux';
import store from '@services/store/store';
import {
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';

test('renders App component without crashing', () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ':animalName',
          element: <CardDetail />,
        },
      ],
    },
  ]);

  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  expect(
    screen.getByTestId('app-container')
  ).toBeInTheDocument();
});
test('matches the snapshot', () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ':animalName',
          element: <CardDetail />,
        },
      ],
    },
  ]);

  const { asFragment } = render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
