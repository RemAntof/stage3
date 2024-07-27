import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import MainPage from '@views/mainPage/MainPage';
import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { createContext } from 'react';
import ThemeCheckbox from '@components/themeCheckbox/themeCheckbox';

export const ThemeContext = createContext('light');

const App: React.FC = () => {
  const location = useLocation();
  const [outletVisible, setOutletVisible] = useState(false);
  const outletRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const switchTheme = () => {
    const tangleTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(tangleTheme);
  };

  useEffect(() => {
    setOutletVisible(location.pathname !== '/');
  }, [location]);

  const onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      outletVisible &&
      outletRef.current &&
      !outletRef.current.contains(event.target as Node)
    ) {
      setOutletVisible(false);
      navigate(-1);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        data-testid="app-container"
        className={`appContainer ${theme} ${outletVisible ? 'shifted' : ''}`}
        onClick={onClick}
      >
        <div
          className={`mainPage ${outletVisible ? 'shifted' : ''}`}
        >
          <ThemeCheckbox switchTheme={switchTheme} />

          <MainPage />
        </div>
        <div
          data-testid="outlet"
          id="outlet"
          ref={outletRef}
          className={outletVisible ? 'visible' : 'hidden'}
        >
          {outletVisible ? <Outlet /> : null}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
