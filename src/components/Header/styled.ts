import styled from 'styled-components';

import logo from 'assets/icons/logo.svg';

const HEADER_MIN_HEIGHT = 5;

export const HeaderContainer = styled.header`
  min-height: ${HEADER_MIN_HEIGHT}vh;
  margin: 0 ${({ theme }) => theme.spaces.xl}px;
  padding: ${({ theme }) => theme.spaces.s}px 0 ;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: 'Logo'
}))``;
