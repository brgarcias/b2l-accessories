import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import { useTranslations } from 'next-intl';

import Layout from '@/components/layout/Layout';

export default function Error() {
  const errorPageTranslations = useTranslations('NotFoundPage');
  return (
    <Layout>
      <div
        className="pt-120 pb-120 d-flex justify-content-center align-items-center"
        style={{ height: '94vh' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h2 className="mb-35">{errorPageTranslations('Title')}</h2>
              <Link
                href="/"
                className="border-btn text-dark bg-warning border border-dark text-center mt-20 ms-3 borderc-btn d-inline-flex"
              >
                {errorPageTranslations('ContentButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: require(`../../i18n/${locale}.json`),
      redirect: '/',
    },
  };
};
