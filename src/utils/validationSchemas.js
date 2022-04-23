import * as Yup from 'yup';

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: Yup.string().min(3),
  lastName: Yup.string().min(3),
  displayName: Yup.string().min(3),
  email: Yup.string()
    .matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/, 'Type valid email')
    .required(),
  password: Yup.string()
    .matches(
      /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$$/,
      'not correct password'
    )
    .required(),
  passwordConfirm: Yup.string()
    .matches(
      /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$$/,
      'not correct password'
    )
    .oneOf([Yup.ref('password'), null])
    .required(),
  chackPromo: Yup.boolean(),
});

export const SIGN_IN_SCHEMA = Yup.object({
  login: Yup.string()
    .matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/, 'Type valid email')
    .required(),
  password: Yup.string()
    .matches(
      /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$$/,
      'not correct password'
    )
    .required(),
  rememberMe: Yup.boolean(),
});
