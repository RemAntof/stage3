import React from 'react';
import './App.css';
import MainPage from '@views/mainPage/MainPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainPage inherits={false} name={''} />
      </div>
    );
  }
}

export default App;
