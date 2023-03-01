import React from 'react';

import { Navigation } from 'components/Navigation';

import { HeaderContainer, Logo } from './styled';

export const Header = () => (
  <HeaderContainer>
    <Logo />
    <Navigation />
  </HeaderContainer>
);
