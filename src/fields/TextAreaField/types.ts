import React, { ReactNode } from 'react';

export interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error: boolean;
  errorMessage?: ReactNode;
  containerStyle?: React.CSSProperties;
}

export interface TextAreaProps {
  error: boolean;
}
