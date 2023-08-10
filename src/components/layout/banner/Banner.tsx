import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import One from 'public/assets/img/shape/cercle.png';
import Two from 'public/assets/img/hero/banner.png';
import Three from 'public/assets/img/shape/hero-shape-5.png';
import Four from 'public/assets/img/shape/hero-shape-6.png';
import Five from 'public/assets/img/shape/rectangle-3.png';

export default function Banner() {
  const homePageTranslations = useTranslations('HomePage');

  return (
    <section
      id="banner"
      className="hero__area hero__hight d-flex align-items-center include__bg p-relative banner-bg-two"
    >
      <div className="hero__cercle">
        <Image src={One} alt="image not found" unoptimized />
      </div>
      <div className="container">
        <div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content-wrapper">
                <div className="hero__content mb-60">
                  <span
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{ textTransform: 'initial' }}
                  >
                    {homePageTranslations('Banner.Title')}{' '}
                    <span> {homePageTranslations('Banner.TitleAccent')}</span>
                  </span>
                  <h1 data-aos="fade-right" data-aos-delay="300">
                    B2L Utilidades
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    style={{ textTransform: 'initial' }}
                  >
                    Utilidades de Qualidade e Variedade em um só lugar
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
                  <Image
                    src={Two}
                    alt="image not found"
                    unoptimized
                    style={{ maxWidth: '400px' }}
                  />
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
