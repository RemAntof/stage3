import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainView.module.css';

const MainView: React.FC = () => {
  return (
    <div className={styles.mainView}>
      <Link to="/uncontrolled-form">
        <button>Uncontrolled Form</button>
      </Link>
      <button>React Form</button>
    </div>
  );
};

export default MainView;
