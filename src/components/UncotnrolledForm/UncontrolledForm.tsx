import validationSchema from '@utils/Validation';
import Input from '@components/inputsFields/input';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveUncontrolledFormData } from '@utils/redux/redux';
import { useNavigate } from 'react-router-dom';
import styles from '../inputsFields/input.module.css';

const UncontrolledForm: React.FC = () => {
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  const countries = useSelector(
    (state: { countries: string[] }) => state.countries
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      age: ageRef.current?.value
        ? parseInt(ageRef.current?.value)
        : null,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      terms: termsRef.current?.checked,
      picture: pictureRef.current?.files?.[0] || null,
      country: countryRef.current?.value,
    };

    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      if (formData.picture) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          dispatch(
            saveUncontrolledFormData({
              ...formData,
              picture: base64String,
            })
          );
        };
        reader.readAsDataURL(formData.picture);
        navigate('/');
      }
      setErrors({});
      console.log('Success');
    } catch (validationErrors) {
      const newErrors: { [key: string]: string } = {};
      if (validationErrors instanceof yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Name"
        labelHtmlFor="name"
        inputType="text"
        refName={nameRef}
        error={errors.name}
      />
      <Input
        labelName="Email"
        labelHtmlFor="email"
        inputType="email"
        refName={emailRef}
        error={errors.email}
      />

      <Input
        labelName="Age"
        labelHtmlFor="age"
        inputType="number"
        refName={ageRef}
        error={errors.age}
      />
      <Input
        labelName="Password"
        labelHtmlFor="password"
        inputType="password"
        refName={passwordRef}
        error={errors.password}
      />

      <Input
        labelName="Confirm Password"
        labelHtmlFor="confirmPassword"
        inputType="password"
        refName={confirmPasswordRef}
        error={errors.confirmPassword}
      />
      <div className={styles.inputContainer}>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" ref={genderRef}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <p
          className={
            errors.gender
              ? styles.errorMassage
              : styles.noErrorPadding
          }
        >
          {errors.gender}
        </p>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="country">Country:</label>
        <select id="country" ref={countryRef}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <p
          className={
            errors.country
              ? styles.errorMassage
              : styles.noErrorPadding
          }
        >
          {errors.country}
        </p>
      </div>

      <Input
        labelName="Accept Terms and Conditions"
        labelHtmlFor="terms"
        inputType="checkbox"
        refName={termsRef}
        error={errors.terms}
      />

      <div className={styles.inputContainer}>
        <label htmlFor="picture">Upload Picture:</label>
        <input
          type="file"
          id="picture"
          ref={pictureRef}
          accept="image/jpeg, image/png"
        />
        <p
          className={
            errors.picture
              ? styles.errorMassage
              : styles.noErrorPadding
          }
        >
          {errors.picture}
        </p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
