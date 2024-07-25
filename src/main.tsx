import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from '@views/errorView/errorView.tsx';
import CardDetail from '@components/cards/cardDetails/CardDetail.tsx';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@services/store/store.ts';

const router = createBrowserRouter([
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

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
