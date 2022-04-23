import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input/Input';
import style from './FormSignUp.module.scss';
import FormButton from '../FormButton/FormButton';
import Chackbox from '../Chackbox/Chackbox';
import RadioSect from '../RadioSect/RadioSect';

const initialVal = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  checkbox1: false,
  radio: '',
};

class FormSignUp extends Component {
  formikSubmit = (values, formikBag) => {
    console.log(values, formikBag);
  };

  render () {
    return (
      <Formik
        initialValues={initialVal}
        validationSchema={SIGN_UP_SCHEMA}
        onSubmit={this.formikSubmit}
      >
        <Form className={style['form-sign-up']}>
          <h1 className={style['form-sign-up__title']}>CREATE AN ACCOUNT</h1>

          <p className={style['form-sign-up__sub-title']}>
            We always keep your name and email address private.
          </p>

          <fieldset className={style['form-sign-up__inputs']}>
            <p className={style['form-sign-up__item']}>
              <Input name='firstName' placeholder='First Name'></Input>
            </p>

            <p className={style['form-sign-up__item']}>
              <Input name='lastName' placeholder='Last Name'></Input>
            </p>

            <p className={style['form-sign-up__item']}>
              <Input name='displayName' placeholder='Display Name'></Input>
            </p>

            <p className={style['form-sign-up__item']}>
              <Input name='email' placeholder='Email'></Input>
            </p>

            <p className={style['form-sign-up__item']}>
              <Input
                name='password'
                placeholder='Password'
                type='password'
              ></Input>
            </p>

            <p className={style['form-sign-up__item']}>
              <Input
                name='passwordConfirm'
                placeholder='Confirm password'
                type='password'
              ></Input>
            </p>
          </fieldset>

          <fieldset className={style['form-sign-up__radio']}>
            <RadioSect name='radio' value='pic1'>
              <span>Join As a Buyer</span>

              <span>
                I am looking for a Name, Logo or Tagline for my business, brand
                or product.
              </span>
            </RadioSect>

            <RadioSect name='radio' value='pic2'>
              <span>Join As a Creative or Marketplace Seller</span>

              <span>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </span>
            </RadioSect>
          </fieldset>

          <fieldset className={style['form-sign-up__checked']}>
            <Chackbox name='checkbox1'>
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </Chackbox>
          </fieldset>

          <FormButton type='submit'>Create account</FormButton>
        </Form>
      </Formik>
    );
  }
}

export default FormSignUp;
