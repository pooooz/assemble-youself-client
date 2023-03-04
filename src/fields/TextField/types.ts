import React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error: boolean;
}

export interface TextInputProps {
  error: boolean;
}
