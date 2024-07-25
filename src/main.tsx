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
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import api from '@services/API/redux.ts';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { buildGetDefaultMiddleware } from 'node_modules/@reduxjs/toolkit/dist/getDefaultMiddleware';

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

const store = configureStore({
  reducer:{
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
