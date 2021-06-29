import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

// Fonts & Styles
import 'fontsource-roboto';
import './App.css';

// Screens
import Wrapper from './screens/Wrapper';

export default function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper/>
    </ThemeProvider>
  );
}
