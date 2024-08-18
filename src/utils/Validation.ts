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
    .test('fileType', 'Invalid file type', (value) => {
      if (!value) return true;
      if (value instanceof FileList) {
        const file = value[0];
        if (file) {
          return ['image/jpeg', 'image/png'].includes(
            file.type
          );
        }
        return false;
      }
      return true;
    })
    .test('fileSize', 'File too large', (value) => {
      if (!value) return true;
      if (value instanceof FileList) {
        const file = value[0];
        if (file) {
          return file.size <= 2 * 1024 * 1024;
        }
        return false;
      }
      return true;
    }),
  country: yup
    .string()
    .required('Please select your country'),
});

export default validationSchema;
