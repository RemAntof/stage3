import React, { useContext } from 'react';
import { ThemeContext } from 'src/App';

interface Props {
  buttonType: 'submit' | 'button' | 'reset';
}

const SearchButton: React.FC<Props> = ({ buttonType }) => {
  const theme = useContext(ThemeContext);
  return (
    <button type={buttonType} className={theme}>
      Search
    </button>
  );
};

export default SearchButton;
