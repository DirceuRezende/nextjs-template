import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';
import theme from './theme';

export type StyledThemeProviderProps = {
  children: ReactNode;
};

export const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
