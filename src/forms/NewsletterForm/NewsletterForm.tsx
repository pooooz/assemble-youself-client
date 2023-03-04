import React from 'react';
import { Formik } from 'formik';

import { validationSchema } from './validationSchema';
import { NewsletterFormValues } from './types';
import { FormWrap, GradientButtonWithMargin, TextFieldWithMargin, Title } from './styled';

export const NewsletterForm = () => {
  const initialValues = {
    email: ''
  };

  const handleSubmit = (values: NewsletterFormValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Formik<NewsletterFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <FormWrap>
          <Title>Подпишитесь на нашу рассылку</Title>
          <TextFieldWithMargin
            type="email"
            name="email"
            placeholder="Введите ваш email"
            error={Boolean(touched.email && errors.email)}
          />
          <GradientButtonWithMargin type="submit">
            Подписаться
          </GradientButtonWithMargin>
        </FormWrap>
      )}
    </Formik>
  );
};
