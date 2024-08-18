import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainView.module.css';
import { useSelector } from 'react-redux';
import { FormDataState } from '@utils/redux/redux';
import DataDisplay from '@components/DataDisplay/DataDisplay';
const MainView: React.FC = () => {
  const uncontrolledData = useSelector(
    (state: { uncontrolledFormData: FormDataState }) =>
      state.uncontrolledFormData
  );
  const controlledData = useSelector(
    (state: { controlledFormData: FormDataState }) =>
      state.controlledFormData
  );
  return (
    <div className={styles.mainView}>
      <div className={styles.formContainer}>
        <Link to="/uncontrolled-form">
          <button>Uncontrolled Form</button>
        </Link>
        <DataDisplay data={uncontrolledData} />
      </div>

      <div className={styles.formContainer}>
        <Link to="/controlled-form">
          <button>Controlled Form</button>
        </Link>
        <DataDisplay data={controlledData} />
      </div>
    </div>
  );
};

export default MainView;
