import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { StyledThemeProvider } from './styled-theme-provider';

export const renderTheme = (children: ReactNode) => {
  return render(<StyledThemeProvider>{children}</StyledThemeProvider>);
};
