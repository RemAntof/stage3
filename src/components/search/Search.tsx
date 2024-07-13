import React, { useState } from 'react';
import styles from '@components/search/search.module.css';
import SearchInput from '@components/inputs/searchInput/SearchInput';
import SearchButton from '@components/buttons/searchButton/SearchButton';

interface SearchProps {
  setLocalStorage: (localStorage: string) => void;
  localStorage: string;
}

const Search: React.FC<SearchProps> = ({
  setLocalStorage,
  localStorage,
}) => {
  const [inputData, setInputData] =
    useState<string>(localStorage);

  const handleInputChange = (inputData: string) => {
    setInputData(inputData);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLocalStorage(inputData);
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
