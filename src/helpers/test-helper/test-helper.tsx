import { store } from '@/store';
import theme from '@/styles/theme';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const customRender = (child: React.ReactElement, options?: RenderOptions) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{child}</ThemeProvider>
    </Provider>,
    options
  );

export * from '@testing-library/react';
export { customRender as render };
