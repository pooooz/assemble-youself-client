export interface CredentialsFormValues {
  name: string;
  email: string;
  password: string;
}

export type Target = 'registration' | 'login';

export interface CredentialsFormProps {
  target: Target;
  headingText?: string;
  onSubmit: (values: CredentialsFormValues) => void;
}
