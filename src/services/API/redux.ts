import {
  BASE_URL,
  DEFAULT_PAGESIZE,
} from '@constants/apiEndpoints';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import formUrlEncoded from 'form-urlencoded';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    animalList: build.query({
      query({ activePage }: { activePage: number }) {
        return {
          url: '/search',
          params: {
            pageNumber: activePage,
            pageSize: DEFAULT_PAGESIZE,
          },
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type':
              'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    animalDetails: build.query({
      query({
        name,
        activePage,
      }: {
        name: string;
        activePage: number;
      }) {
        return {
          url: '/search',
          params: {
            pageNumber: activePage,
            pageSize: DEFAULT_PAGESIZE,
          },
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type':
              'application/x-www-form-urlencoded',
          },
          body: formUrlEncoded({ name: name }),
        };
      },
    }),
  }),
});

export default api;
