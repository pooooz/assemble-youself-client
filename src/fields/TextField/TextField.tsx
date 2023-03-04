import React from 'react';

import { TextFieldProps } from './types';
import { Container, ErrorMessageWrap, Label, TextInput } from './styled';

export const TextField = ({
  label,
  error,
  errorMessage,
  required,
  containerStyle,
  ...htmlProps
}: TextFieldProps) => (
  <Container style={containerStyle}>
    {label && <Label>{`${label}${required ? ' *' : ''}`}</Label>}
    <TextInput error={error} {...htmlProps} />
    {error && <ErrorMessageWrap>{errorMessage}</ErrorMessageWrap>}
  </Container>
);
