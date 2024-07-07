import React, { Component } from 'react';
import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';

interface MainPageState {
  local: string;
}

class MainPage extends Component<
  PropertyDefinition,
  MainPageState
> {
  constructor(props: PropertyDefinition) {
    super(props);
    this.state = {
      local: getLocalStorage(LOCAL_STORAGE_KEY) || '',
    };
  }

  updateLocal = (newLocal: string) => {
    this.setState({ local: newLocal });
  };

  render() {
    const { local } = this.state;
    return (
      <div>
        <Search updateLocal={this.updateLocal} />
        <Cards local={local} />
      </div>
    );
  }
}

export default MainPage;
