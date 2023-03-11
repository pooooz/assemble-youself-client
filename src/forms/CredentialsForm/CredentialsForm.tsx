import React from 'react';
import { Formik } from 'formik';

import { CredentialsFormProps, CredentialsFormValues } from './types';
import {
  FormWrap,
  GradientButtonWithMargin,
  Heading,
  TextFieldWithMargin
} from './styled';
import { getValidationSchema } from './validationSchema';

export const CredentialsForm = ({ target, onSubmit, headingText }: CredentialsFormProps) => {
  const initialValues: CredentialsFormValues = target === 'registration'
    ? {
        name: '',
        email: '',
        password: ''
      }
    : {
        email: '',
        password: ''
      };

  return (
    <Formik<CredentialsFormValues>
      initialValues={initialValues}
      validationSchema={getValidationSchema(target)}
      onSubmit={onSubmit}
    >
      {({ touched, errors }) => (
        <FormWrap>
          {headingText && <Heading>{headingText}</Heading>}
          {target === 'registration' && (
          <TextFieldWithMargin
            label="Имя"
            name="name"
            placeholder="Введите имя пользователя"
            error={Boolean(touched.name && errors.name)}
            errorMessage={errors.name}
            required
          />
          )}
          <TextFieldWithMargin
            label="Email"
            name="email"
            placeholder="Введите email"
            error={Boolean(touched.email && errors.email)}
            errorMessage={errors.email}
            required
          />
          <TextFieldWithMargin
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
            error={Boolean(touched.password && errors.password)}
            errorMessage={errors.password}
            required
          />
          <GradientButtonWithMargin
            type="submit"
          >
            Подтвердить
          </GradientButtonWithMargin>
        </FormWrap>
      )}
    </Formik>
  );
};
