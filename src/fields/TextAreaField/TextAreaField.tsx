import React from 'react';
import { Field } from 'formik';

import { TextAreaFieldProps } from './types';
import { Container, ErrorMessageWrap, Label, TextArea } from './styled';

export const TextAreaField = ({
  label,
  error,
  errorMessage,
  required,
  containerStyle,
  ...htmlProps
}: TextAreaFieldProps) => (
  <Container style={containerStyle}>
    {label && <Label>{`${label}${required ? ' *' : ''}`}</Label>}
    <Field error={error} as={TextArea} {...htmlProps} />
    {error && error && <ErrorMessageWrap>{errorMessage}</ErrorMessageWrap>}
  </Container>
);
