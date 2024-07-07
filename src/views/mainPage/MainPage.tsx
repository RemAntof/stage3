import React, { Component } from 'react';
import Cards from '@components/cards/Cards';
import Search from '@components/search/Search';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import getLocalStorage from '@services/localStorage/getlocalStorage';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import TriggerErrorButton from '@components/buttons/triggerErrorButton/TriggerErrorButton';

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
        <ErrorBoundary>
          <TriggerErrorButton />
          <Search updateLocal={this.updateLocal} />
          <Cards local={local} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;
