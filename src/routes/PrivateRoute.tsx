import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';
import { selectAuth } from 'store/auth/selectors';

import { publicRoutePaths } from './constants';
import { PrivateRouteProps } from './types';

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAppSelector(selectAuth);

  if (!isAuth) {
    return <Navigate to={`/${publicRoutePaths.logIn}`} />;
  }

  return children || <Outlet />;
};
