import React from 'react';
import './App.css';
import MainPage from '@views/mainPage/MainPage';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <MainPage />
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default App;
