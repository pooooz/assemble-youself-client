import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { MainContainer } from './styled';

export const BasicLayout = () => (
  <>
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </>
);
