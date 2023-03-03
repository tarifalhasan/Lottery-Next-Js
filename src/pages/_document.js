import { Html, Head, Main, NextScript } from 'next/document';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
