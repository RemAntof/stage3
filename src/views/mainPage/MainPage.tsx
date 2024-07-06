import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Cards inherits={false} name={''} />
      </div>
    );
  }
}

export default MainPage;
