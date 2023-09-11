import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      100: '#F0F6FF',
      200: '#83BDFF',
      300: '#1E70EB',
      400: '#0043A8',
      500: '#0B253C',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
});

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
