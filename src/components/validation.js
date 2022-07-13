import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Both passwords musth match'),
});
