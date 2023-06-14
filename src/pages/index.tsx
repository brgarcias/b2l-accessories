import { GetStaticProps } from 'next';

import Layout from '@/components/layout/Layout';
import FeedbackFour from '@/components/containers/feedback/FeedbackFour';
import AboutMission from '@/components/containers/about/AboutMission';
import Banner from '@/components/layout/banner/Banner';
import HomeTwoService from '@/components/containers/service/HomeTwoService';
import HomeTwoFeatures from '@/components/containers/features/HomeTwoFeatures';
import HomeThreeTouch from '@/components/containers/touch/HomeThreeTouch';

export default function HomeFour() {
  return (
    <Layout header={4} footer={2}>
      <Banner />
      <AboutMission />
      <HomeTwoService />
      <HomeTwoFeatures />
      <FeedbackFour />
      <HomeThreeTouch />
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
