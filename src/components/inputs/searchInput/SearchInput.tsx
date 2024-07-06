import styles from '@components/inputs/searchInput/searchInput.module.css';
import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        className={styles.searchInput}
        placeholder="Search..."
      ></input>
    );
  }
}
export default SearchInput;
