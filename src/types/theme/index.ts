export interface ThemeColors {
  main: string;
  text: string;
  textWithBackground: string;
  activeLink: string;
  background: string;
}

export interface ThemeScaleValues {
  s: number;
  m: number;
  l: number;
  xl: number;
}
export interface ThemeDeviceQueries {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}

export type ThemeNames = 'light' | 'dark';
