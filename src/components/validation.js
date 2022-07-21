import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
};
export const confrimInitialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export const createInitialValues = {
  password: '',
  confirmPassword: '',
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export const confrimValidationSchema = yup.object().shape({
  name: yup
    .string()
    // .name('Please enter valid name')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Both passwords must match'),
});
export const createValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Both passwords must match'),
});
