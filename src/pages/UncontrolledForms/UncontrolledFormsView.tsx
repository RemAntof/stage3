import React from 'react';
import styles from './UncontrolledFormsView.module.css';
import UncontrolledForm from '@components/UncotnrolledForm/UncontrolledForm';

const UncontrolledFormsView: React.FC = () => {
  return (
    <div className={styles.uncontrolledFormsView}>
      <UncontrolledForm />
    </div>
  );
};

export default UncontrolledFormsView;
