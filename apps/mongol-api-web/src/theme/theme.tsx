import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['warning'];
  }

  interface PaletteOptions {
    blue?: PaletteOptions['warning'];
  }
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
    secondary: {
      100: '#F7F9FC',
      200: '#D0D7E2',
      300: '#7B8698',
      400: '#374253',
      500: '#0F1825',
      main: '#0F1825',
    },
    blue: {
      100: '#345EED',
      200: '#002762',
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
    fontFamily: 'Nunito',
    h1: {
      fontSize: '54px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '65.93px',
    },
    h2: {
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '58.61px',
    },
    h3: {
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '48.84px',
    },
    subtitle1: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '28.63px',
    },
    subtitle2: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    body1: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: '29.02px',
    },
    body2: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
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
