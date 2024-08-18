import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainView from './pages/Main/mainView';
import UncontrolledFormsView from './pages/UncontrolledForms/UncontrolledFormsView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route
          path="/uncontrolled-form"
          element={<UncontrolledFormsView />}
        />
      </Routes>
    </Router>
  );
};

export default App;
