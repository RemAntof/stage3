import React, { Component } from 'react';
import styles from '@components/search/search.module.css';
import SearchInput from '@components/inputs/searchInput/SearchInput';
import SearchButton from '@components/buttons/searchButton/SearchButton';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';

interface SearchProps {
  updateLocal: (newLocal: string) => void;
}

interface SearchState {
  inputData: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      inputData: getLocalStorage(LOCAL_STORAGE_KEY) || '',
    };
  }

  handleInputChange = (inputData: string) => {
    this.setState({ inputData });
  };

  handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { inputData } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, inputData);
    this.props.updateLocal(inputData);
  };

  render() {
    return (
      <div className={styles.searchContainer}>
        <form onSubmit={this.handleSubmit}>
          <SearchInput
            value={this.state.inputData}
            onInputChange={this.handleInputChange}
          />
          <SearchButton buttonType="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
