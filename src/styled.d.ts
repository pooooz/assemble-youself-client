import 'styled-components';

import { ThemeColors, ThemeDeviceQueries, ThemeScaleValues } from 'types/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: ThemeDeviceQueries;
    colors: ThemeColors;
    fontSizes: ThemeScaleValues;
    spaces: ThemeScaleValues;
  }
}
