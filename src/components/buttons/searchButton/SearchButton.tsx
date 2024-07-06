import React from 'react';

interface Props {
  buttonType: 'submit' | 'button' | 'reset';
}

const SearchButton: React.FC<Props> = ({ buttonType }) => {
  return <button type={buttonType}>Search</button>;
};

export default SearchButton;
