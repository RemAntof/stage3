import styles from '@components/inputs/searchInput/searchInput.module.css';
import React from 'react';

interface Props {
  value: string;
  onInputChange: (inputData: string) => void;
}

class SearchInput extends React.Component<Props> {
  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    this.props.onInputChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <input
        className={styles.searchInput}
        placeholder="Search..."
        value={value}
        onChange={this.handleInputChange}
      />
    );
  }
}
export default SearchInput;
