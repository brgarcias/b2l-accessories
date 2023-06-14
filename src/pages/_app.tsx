import Head from 'next/head';
import { NextIntlProvider } from 'next-intl';
import { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import Preloader from '@/layout/Preloader';

import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  const customErrorFunction = () => false;

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <NextIntlProvider
      onError={customErrorFunction}
      locale="pt-BR"
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
      timeZone="America/Sao_Paulo"
    >
      <Head>
        <title>B2L &mdash; Brindes e Acessórios</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="b2l-brindes-acessorios" />
      </Head>
      {loader && <Preloader />}
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextIntlProvider>
  );
};
export default App;
