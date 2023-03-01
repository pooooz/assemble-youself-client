import React from 'react';

import { publicRoutePaths, routeLabelsMap } from 'routes/constants';

import { capitalize } from 'utils/helpers';

import { Link, NavElement, NavigationContainer } from './styled';

export const Navigation = () => (
  <NavigationContainer>
    {Object.keys(publicRoutePaths).map((route) => (
      <NavElement key={route}>
        <Link to={route}>{capitalize(routeLabelsMap.get(route as keyof typeof publicRoutePaths) || '')}</Link>
      </NavElement>
    ))}
  </NavigationContainer>
);
