import { AppProps } from 'next/app';
import { wrapper } from '@/store';
import Head from 'next/head';

import GlobalStyles from '@/styles/global';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Next Template</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...props} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
