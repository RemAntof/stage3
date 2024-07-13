import {
  BASE_URL,
  DEFAULT_PAGE,
  DEFAULT_PAGESIZE,
} from '@constants/apiEndpoints';
import Animal from '@interfaces/animal';
import formUrlEncoded from 'form-urlencoded';

const fetchApi = async (
  name: string | undefined = undefined
): Promise<Animal[]> => {
  const url = name
    ? `${BASE_URL}?pageNumber=${DEFAULT_PAGE}&pageSize=${DEFAULT_PAGESIZE}&name=${name}`
    : `${BASE_URL}?pageNumber=${DEFAULT_PAGE}&pageSize=${DEFAULT_PAGESIZE}`;
  const method = name ? 'POST' : 'GET';
  const body = name ? formUrlEncoded({ name: name }) : null;
  const response = await fetch(url, {
    method: method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data)
  return data.animals;
};
export default fetchApi;
