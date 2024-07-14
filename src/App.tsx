import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import MainPage from '@views/mainPage/MainPage';
import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const App: React.FC = () => {
  const location = useLocation();
  const [outletVisible, setOutletVisible] = useState(false);
  const outletRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
    <div className="appContainer" onClick={onClick}>
      <div
        className={`mainPage ${outletVisible ? 'shifted' : ''}`}
      >
        <MainPage />
      </div>
      <div
        id="outlet"
        ref={outletRef}
        className={outletVisible ? 'visible' : 'hidden'}
      >
        {outletVisible ? <Outlet /> : null}
      </div>
    </div>
  );
};

export default App;
