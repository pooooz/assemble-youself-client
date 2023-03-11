import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { MainContainer, TopBackgroundImage } from './styled';

export const LayoutWithGradient = () => (
  <>
    <Header />
    <TopBackgroundImage />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </>
);
