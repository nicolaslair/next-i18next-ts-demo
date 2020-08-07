import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { appWithTranslation } from '../i18n';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Demo page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
