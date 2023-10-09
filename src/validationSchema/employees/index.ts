import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  date_of_birth: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
