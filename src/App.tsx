import React from 'react';
import './App.css';
import MainPage from '@views/mainPage/MainPage';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <MainPage />
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
