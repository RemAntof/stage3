import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../inputsFields/input.module.css';

interface ControlledInputProps {
  label: string;
  name: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  type,
  error,
  register,
}) => (
  <div className={styles.inputContainer}>
    <label htmlFor={name}>{label}:</label>
    <input id={name} type={type} {...register} />
    {error && (
      <p className={styles.errorMassage}>{error}</p>
    )}
  </div>
);

export default ControlledInput;
