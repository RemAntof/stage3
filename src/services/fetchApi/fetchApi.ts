import {
  BASE_URL,
  DEFAULT_PAGE,
  DEFAULT_PAGESIZE,
} from '@constants/apiEndpoints';
import Animal from '@interfaces/animal';

const fetchApi = async (): Promise<Animal[]> => {
  const response = await fetch(
    `${BASE_URL}?pageNumber=${DEFAULT_PAGE}&pageSize=${DEFAULT_PAGESIZE}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.animals;
};
export default fetchApi;
