import { type DefaultTheme } from 'styled-components';

import {
  type ThemeColors,
  type ThemeDeviceQueries,
  type ThemeNames,
  type ThemeScaleValues
} from 'types/theme';

const light: ThemeColors = {
  main: '#6A1B1B',
  text: '#000000',
  textWithBackground: '#FFFFFF',
  activeLink: '#185942',
  background: '#ffffff'
};

const colors = new Map<ThemeNames, ThemeColors>([
  ['light', light]
]);

export const themeNames: ThemeNames[] = ['light', 'dark'];

const deviceWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920
};

export const device: ThemeDeviceQueries = {
  mobileS: `(max-width: ${deviceWidth.mobileS}px)`,
  mobileM: `(max-width: ${deviceWidth.mobileM}px)`,
  mobileL: `(max-width: ${deviceWidth.mobileL}px)`,
  tablet: `(max-width: ${deviceWidth.tablet}px)`,
  laptop: `(max-width: ${deviceWidth.laptop}px)`,
  laptopL: `(max-width: ${deviceWidth.laptopL}px)`,
  desktop: `(max-width: ${deviceWidth.desktop}px)`,
  desktopL: `(max-width: ${deviceWidth.desktop}px)`
};

const spaces: ThemeScaleValues = {
  s: 5,
  m: 16,
  l: 20,
  xl: 64
};

const fontSizes: ThemeScaleValues = {
  s: 16,
  m: 18,
  l: 24,
  xl: 32
};

export const getColoredTheme = (currentTheme: ThemeNames): DefaultTheme => ({
  colors: (colors.get(currentTheme) != null) || light,
  fontSizes,
  spaces,
  device
});
