import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[A-Z]/,
      'Name must start with an uppercase letter'
    )
    .required(),
  email: yup.string().email('Invalid email').required(),
  age: yup
    .number()
    .positive('Age must be a positive number')
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'Password must be strong'
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
  gender: yup
    .string()
    .required('Please select your gender'),
  terms: yup
    .bool()
    .oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
  picture: yup
    .mixed()
    .test(
      'fileType',
      'Invalid file type',
      (value: File | null) => {
        if (!value) return false;
        const allowedTypes = ['image/jpeg', 'image/png'];
        return allowedTypes.includes(value.type);
      }
    )
    .test(
      'fileSize',
      'File too large',
      (value: File | null) => {
        return value
          ? value.size <= 2 * 1024 * 1024
          : false; // 2MB
      }
    ),
  country: yup
    .string()
    .required('Please select your country'),
});

export default validationSchema;
