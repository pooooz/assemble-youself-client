import React from 'react';
import { useField } from 'formik';

import { TextAreaFieldProps } from './types';
import { Container, ErrorMessageWrap, Label, TextArea } from './styled';

export const TextAreaField = ({
  label,
  error,
  errorMessage,
  required,
  containerStyle,
  ...htmlProps
}: TextAreaFieldProps) => {
  const [field, meta] = useField(htmlProps.name || '');

  return (
    <Container style={containerStyle}>
      {label && <Label>{`${label}${required ? ' *' : ''}`}</Label>}
      <TextArea error={error} {...field} {...htmlProps} />
      {meta.touched && error && <ErrorMessageWrap>{errorMessage}</ErrorMessageWrap>}
    </Container>
  );
};
