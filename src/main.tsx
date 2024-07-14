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
  //   {
  //   path: '/?page=:page&search=:search',
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: ':animalName',
  //       element: <CardDetail />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
