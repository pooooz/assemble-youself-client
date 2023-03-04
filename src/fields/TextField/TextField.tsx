import React from 'react';

import { TextFieldProps } from './types';
import { Label, TextInput } from './styled';

export const TextField = ({ label, required, error, ...htmlProps }: TextFieldProps) => (
  <>
    {label && <Label>{`${label}${required ? ' *' : ''}`}</Label>}
    <TextInput error={error} {...htmlProps} />
  </>
);
