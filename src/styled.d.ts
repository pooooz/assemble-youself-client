import 'styled-components';

import { type ThemeColors, type ThemeDeviceQueries, type ThemeScaleValues } from 'types/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: ThemeDeviceQueries
    colors: ThemeColors
    fontSizes: ThemeScaleValues
    spaces: ThemeScaleValues
  }
}
