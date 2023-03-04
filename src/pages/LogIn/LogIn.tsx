import React from 'react';

import { CredentialsForm } from 'forms/CredentialsForm';
import { CredentialsFormValues } from 'forms/CredentialsForm/types';

import { AuthFormContainer, CenteredFullSizeWrap } from 'styled';

export const LogIn = () => {
  const onSubmit = (values: CredentialsFormValues) => {
    console.log(values);
  };

  return (
    <CenteredFullSizeWrap>
      <AuthFormContainer>
        <CredentialsForm
          target="login"
          headingText="Вход"
          onSubmit={onSubmit}
        />
      </AuthFormContainer>
    </CenteredFullSizeWrap>
  );
};
