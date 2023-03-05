import React from 'react';

import { privateRoutePaths, publicRoutePaths, routeLabelsMap } from 'routes/constants';

import { useAppSelector } from 'store/hooks';
import { selectAuth } from 'store/auth/selectors';

import { capitalize } from 'utils/helpers';

import { Link, NavElement, NavigationContainer } from './styled';

export const Navigation = () => {
  const isAuth = useAppSelector(selectAuth);

  return isAuth
    ? (
      <NavigationContainer>
        {Object.keys(privateRoutePaths).map((routeKey) => (
          <NavElement key={routeKey}>
            <Link to={`/${privateRoutePaths[routeKey as keyof typeof privateRoutePaths]}`}>{capitalize(routeLabelsMap.get(routeKey as keyof typeof privateRoutePaths) || '')}</Link>
          </NavElement>
        ))}
      </NavigationContainer>
      )
    : (
      <NavigationContainer>
        {Object.keys(publicRoutePaths).map((routeKey) => (
          <NavElement key={routeKey}>
            <Link to={`/${publicRoutePaths[routeKey as keyof typeof publicRoutePaths]}`}>{capitalize(routeLabelsMap.get(routeKey as keyof typeof publicRoutePaths) || '')}</Link>
          </NavElement>
        ))}
      </NavigationContainer>
      );
};
