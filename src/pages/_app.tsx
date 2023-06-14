import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { Suspense, useEffect } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'public/assets/app/css/fontawesome-pro.css';
import '@/styles/index-four.scss';
import '@/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const customErrorFunction = () => {
    return false;
  };

  return (
    <Suspense>
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
        <Component {...pageProps} />
      </NextIntlProvider>
    </Suspense>
  );
}
