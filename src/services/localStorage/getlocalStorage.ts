const getLocalStorage = (key: string): string => {
  const data = localStorage.getItem(key);
  if (data) {
    return data;
  } else {
    return '';
  }
};
export default getLocalStorage;
