import React from 'react';
import { Formik, Form } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input/Input';
import Chackbox from '../Chackbox/Chackbox';
import style from './FormSignIn.module.scss';
import FormButton from '../FormButton/FormButton';

const initialVal = {
  login: '',
  password: '',
  rememberMe: false,
};

function FormSignIn () {
  const formikSubmit = (values, formikBag) => {
    console.log(values, formikBag);
  };

  return (
    <Formik
      initialValues={initialVal}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={formikSubmit}
    >
      <Form className={style['form-sign-in']}>
        <h1 className={style['form-sign-in__title']}>LOGIN TO YOUR ACCOUNT</h1>

        <fieldset className={style['form-sign-in__fields']}>
          <p className={style['form-sign-in__item']}>
            <Input name='login' placeholder='Email'></Input>
          </p>

          <p className={style['form-sign-in__item']}>
            <Input
              name='password'
              placeholder='Password'
              type='password'
            ></Input>
          </p>

          <p>
            <Chackbox name='rememberMe'>Remember Me</Chackbox>
          </p>
        </fieldset>

        <FormButton type='submit'>Login</FormButton>
      </Form>
    </Formik>
  );
}

export default FormSignIn;
