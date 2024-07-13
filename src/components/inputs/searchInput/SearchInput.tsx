import React from 'react';
import styles from '@components/inputs/searchInput/searchInput.module.css';

interface Props {
  value: string;
  onInputChange: (inputData: string) => void;
}

const SearchInput: React.FC<Props> = ({
  value,
  onInputChange,
}) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onInputChange(event.target.value);
  };

  return (
    <input
      className={styles.searchInput}
      placeholder="Search..."
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
