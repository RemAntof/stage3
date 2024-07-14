import { useState, useEffect } from 'react';

const useLocalStorage = (
  localStorageKey: string
): [string, (value: string) => void] => {
  const [value, setValue] = useState<string>(() => {
    const storedValue =
      localStorage.getItem(localStorageKey);
    return storedValue !== null ? storedValue : '';
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
