import React, { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { store } from 'store/index';

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
    <Provider store={store}>
      <ThemePreferenceContext.Provider value={themeContextProviderValue}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </Provider>
  );
};

export default App;
