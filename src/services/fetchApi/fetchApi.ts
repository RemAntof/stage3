import Animal from '@interfaces/animal';

const fetchApi = async (): Promise<Animal[]> => {
  const response = await fetch(
    'https://stapi.co/api/v1/rest/animal/search?pageNumber=1&pageSize=20',
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
  return data.animals; // Adjust according to the actual response structure
};
export default fetchApi;
