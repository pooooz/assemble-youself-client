import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';
import { changeAuth } from 'store/auth/slice';

import { CredentialsForm } from 'forms/CredentialsForm';
import { CredentialsFormValues } from 'forms/CredentialsForm/types';

import { AuthFormContainer, CenteredFullSizeWrap } from 'styled';

export const LogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: CredentialsFormValues) => {
    console.log(values);
    if (values.email === 'user@user.com' && values.password === '123456789') {
      dispatch(changeAuth(true));
      navigate('/home');
    }
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
