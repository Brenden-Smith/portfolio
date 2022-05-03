import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppGroup } from './components';
import "@fontsource/roboto"
import { ThemeProvider } from '@emotion/react';
import { createTheme, responsiveFontSizes } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = responsiveFontSizes(createTheme());

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="main">
        <AppGroup />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

