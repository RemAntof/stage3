import React, { useState } from 'react';
import styles from '@components/search/search.module.css';
import SearchInput from '@components/inputs/searchInput/SearchInput';
import SearchButton from '@components/buttons/searchButton/SearchButton';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';

interface SearchProps {
  updateLocal: (newLocal: string) => void;
}

const Search: React.FC<SearchProps> = ({ updateLocal }) => {
  const [inputData, setInputData] = useState<string>(
    getLocalStorage(LOCAL_STORAGE_KEY) || ''
  );

  const handleInputChange = (inputData: string) => {
    setInputData(inputData);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY, inputData);
    updateLocal(inputData);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <SearchInput
          value={inputData}
          onInputChange={handleInputChange}
        />
        <SearchButton buttonType="submit" />
      </form>
    </div>
  );
};

export default Search;
