import styled from 'styled-components';

import topBackground from 'assets/images/topBackground.png';

const FULL = 100;

export const MainContainer = styled.main`
  flex: 1
`;

export const TopBackgroundImage = styled.img.attrs(() => ({
  src: topBackground,
  alt: 'Top Background'
}))`
  position: absolute;
  width: ${FULL}%;
  height: ${FULL}%;
  z-index: -1;
  overflow: hidden;
`;
