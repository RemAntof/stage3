import {
  BASE_URL,
  DEFAULT_PAGE,
  DEFAULT_PAGESIZE,
} from '@constants/apiEndpoints';
import ApiResponse from '@interfaces/apiResponse';
import formUrlEncoded from 'form-urlencoded';

const fetchApi = async (
  name: string | undefined = undefined,
  activePage: number = DEFAULT_PAGE
): Promise<ApiResponse> => {
  const url = name
    ? `${BASE_URL}?pageNumber=${activePage}&pageSize=${DEFAULT_PAGESIZE}&name=${name}`
    : `${BASE_URL}?pageNumber=${activePage}&pageSize=${DEFAULT_PAGESIZE}`;
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
  console.log(data);
  return data;
};
export default fetchApi;
