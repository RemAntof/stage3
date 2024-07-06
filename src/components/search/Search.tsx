import React from 'react';
import styles from '@components/search/search.module.css';
import SearchInput from '@components/inputs/searchInput/SearchInput';
import SearchButton from '@components/buttons/searchButton/SearchButton';

class Search extends React.Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}

export default Search;
