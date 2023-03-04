import React, { ReactNode } from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error: boolean;
  errorMessage?: ReactNode;
  containerStyle?: React.CSSProperties;
}

export interface TextInputProps {
  error: boolean;
}
