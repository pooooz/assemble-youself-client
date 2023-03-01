import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { MainContainer, TopBackgroundImage } from './styled';

export const Layout = () => (
  <>
    <Header />
    <TopBackgroundImage />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </>
);
