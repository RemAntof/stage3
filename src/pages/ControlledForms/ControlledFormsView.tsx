import React from 'react';
import ControlledForm from '@components/ControlledForm/ControlledForm';
import styles from './ControlledFormsView.module.css';

const ControlledFormsView: React.FC = () => {
  return (
    <div className={styles.controlledFormsView}>
      <ControlledForm />
    </div>
  );
};

export default ControlledFormsView;
