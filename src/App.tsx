import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainView from './pages/Main/mainView';
import UncontrolledFormsView from './pages/UncontrolledForms/UncontrolledFormsView';
import ControlledFormsView from './pages/ControlledForms/ControlledFormsView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route
          path="/uncontrolled-form"
          element={<UncontrolledFormsView />}
        />
        <Route
          path="/controlled-form"
          element={<ControlledFormsView />}
        />
      </Routes>
    </Router>
  );
};

export default App;
