import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveControlledFormData } from '@utils/redux/redux';
import { useNavigate } from 'react-router-dom';
import validationSchema from '@utils/Validation';
import styles from '../inputsFields/input.module.css';

interface FormData {
  name: string;
  email: string;
  age: number | null;
  gender: string;
  country: string;
  picture: Blob;
  terms: boolean;
  password: string;
}

const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector(
    (state: { countries: string[] }) => state.countries
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    if (data.picture && data.picture[0]) {
      const file = data.picture[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        dispatch(
          saveControlledFormData({
            ...data,
            picture: base64String,
          })
        );
        navigate('/');
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          {...register('name')}
        />
        {errors.name && (
          <p className={styles.errorMassage}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <p className={styles.errorMassage}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          {...register('age')}
        />
        {errors.age && (
          <p className={styles.errorMassage}>
            {errors.age.message}
          </p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <p className={styles.errorMassage}>
            {errors.password.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className={styles.errorMassage}>
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" {...register('gender')}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className={styles.errorMassage}>
            {errors.gender.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="country">Country:</label>
        <select id="country" {...register('country')}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className={styles.errorMassage}>
            {errors.country.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="terms">
          <input
            id="terms"
            type="checkbox"
            {...register('terms')}
          />
          Accept Terms and Conditions
        </label>
        {errors.terms && (
          <p className={styles.errorMassage}>
            {errors.terms.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="picture">Upload Picture:</label>
        <input
          id="picture"
          type="file"
          {...register('picture')}
          accept="image/jpeg, image/png"
        />
        {errors.picture && (
          <p className={styles.errorMassage}>
            {errors.picture.message}
          </p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
