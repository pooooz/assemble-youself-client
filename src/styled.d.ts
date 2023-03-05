import 'styled-components';

import { ThemeColors, ThemeDeviceQueries, ThemeScaleValues } from 'types/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: ThemeDeviceQueries;
    colors: ThemeColors;
    fontSizes: ThemeScaleValues;
    spaces: ThemeScaleValues;
  }
}
