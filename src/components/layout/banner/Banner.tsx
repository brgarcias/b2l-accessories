import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import One from 'public/assets/img/shape/cercle.png';
import Two from 'public/assets/img/hero/hero-thumb-2.png';
import Three from 'public/assets/img/shape/hero-shape-5.png';
import Four from 'public/assets/img/shape/hero-shape-6.png';
import Five from 'public/assets/img/shape/rectangle-3.png';

import YoutubeEmbed from '@/components/containers/youtube/YoutubeEmbed';

export default function Banner() {
  const homePageTranslations = useTranslations('HomePage');
  const [videoActive, setVideoActive] = useState(false);

  return (
    <section
      id="banner"
      className="hero__area hero__hight d-flex align-items-center include__bg p-relative banner-bg-two"
    >
      <div className="hero__cercle">
        <Image src={One} alt="image not found" unoptimized />
      </div>
      <div className="container">
        <div className="">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content-wrapper">
                <div className="hero__content mb-60">
                  <span className="" data-aos="fade-up" data-aos-delay="200">
                    {homePageTranslations('Banner.Title')}{' '}
                    <span> {homePageTranslations('Banner.TitleAccent')}</span>
                  </span>
                  <h1 className="" data-aos="fade-right" data-aos-delay="300">
                    B2LAcessórios
                  </h1>
                  <p className="" data-aos="fade-up" data-aos-delay="600">
                    Acessórios de Qualidade e Variedade em um só Lugar
                  </p>
                </div>
                {/* <div
                  className="hero__btn-link "
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <button
                    className="hero__link popup-video"
                    aria-label="open video modal"
                    onClick={() => setVideoActive(true)}
                  >
                    {' '}
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero__thumb-wrapper-2 mb-60">
                <div className="hero__thumb-2 w-img">
                  <Image src={Two} alt="image not found" unoptimized />
                </div>
                <div className="hero__shape-7">
                  <Image src={Three} alt="image not found" unoptimized />
                </div>
                <div className="hero__shape-8">
                  <Image src={Four} alt="image not found" unoptimized />
                </div>
                <div className="hero__regtangle">
                  <Image src={Five} alt="Image" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? ' video-zoom-in' : ' ') + ' video-backdrop'}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-light fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: require(`../../../../i18n/${locale}.json`),
      redirect: '/',
    },
  };
};
