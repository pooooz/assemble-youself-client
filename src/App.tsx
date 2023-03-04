import React, { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeNames } from 'types/theme';

import { ThemePreferenceContext } from 'utils/context';

import { GlobalStyles } from './globalStyles';
import { router } from './routes';

import { getColoredTheme } from 'theme';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>('dark');

  const themeContextProviderValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );

  const theme = getColoredTheme(currentTheme);

  return (
    <ThemePreferenceContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};

export default App;
