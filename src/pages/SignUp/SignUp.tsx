import React from 'react';

import { CredentialsFormValues } from 'forms/CredentialsForm/types';
import { CredentialsForm } from 'forms/CredentialsForm';

import { CenteredFullSizeWrap, FormContainer } from 'styled';

export const SignUp = () => {
  const onSubmit = (values: CredentialsFormValues) => {
    console.log(values);
  };

  return (
    <CenteredFullSizeWrap>
      <FormContainer>
        <CredentialsForm
          target="registration"
          headingText="Регистрация"
          onSubmit={onSubmit}
        />
      </FormContainer>
    </CenteredFullSizeWrap>
  );
};
