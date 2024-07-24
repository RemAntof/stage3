import {
  BASE_URL,
  DEFAULT_PAGESIZE,
} from '@constants/apiEndpoints';
import ApiResponse from '@interfaces/apiResponse';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import formUrlEncoded from 'form-urlencoded';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }),
  endpoints: (build) => ({
    animal: build.query<
      ApiResponse,
      { activePage: number; name: string }
    >({
      query({ activePage, name }) {
        return {
          url: '/search',
          params: {
            pageNumber: activePage,
            pageSize: DEFAULT_PAGESIZE,
          },
          method: name ? 'POST' : 'GET',
          body: name
            ? formUrlEncoded({ name: name })
            : undefined,
        };
      },
    }),
    animalDetails: build.query<
      ApiResponse,
      { name: string }
    >({
      query({ name }) {
        return {
          url: '/search',
          params: {
            name: name,
            pageNumber: 0,
            pageSize: DEFAULT_PAGESIZE,
          },
          method: name ? 'POST' : 'GET',
          body: name
            ? formUrlEncoded({ name: name })
            : undefined,
        };
      },
    }),
  }),
});

export default api;
export const { useAnimalQuery, useAnimalDetailsQuery } =
  api;
