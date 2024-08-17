import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from './pages/Main/mainView';
import UncontrolledForm from '@components/UncotnrolledForm/UncontrolledForm';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      </Routes>
    </Router>
  );
};

export default App;
