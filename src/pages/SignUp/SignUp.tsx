import React from 'react';

import { CredentialsFormValues } from 'forms/CredentialsForm/types';
import { CredentialsForm } from 'forms/CredentialsForm';

import { AuthFormContainer, CenteredFullSizeWrap } from 'styled';

export const SignUp = () => {
  const onSubmit = (values: CredentialsFormValues) => {
    console.log(values);
  };

  return (
    <CenteredFullSizeWrap>
      <AuthFormContainer>
        <CredentialsForm
          target="registration"
          headingText="Регистрация"
          onSubmit={onSubmit}
        />
      </AuthFormContainer>
    </CenteredFullSizeWrap>
  );
};
