import React from 'react';
import Image from 'next/image';
import One from 'public/assets/img/shape/about-shape-1.png';
import Two from 'public/assets/img/shape/about-shape-2.png';
import Three from 'public/assets/img/shape/rectangle-1.png';
import Four from 'public/assets/img/shape/rectangle-2.png';
import Five from 'public/assets/img/about/about-thumb.png';

const AboutMission = () => {
  return (
    <div id="about" className="about__area z-index-11 p-relative pt-120 pb-60">
      <div className="container">
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__content-wapper mb-60">
              <div className="section__title-wrapper mb-40">
                <span className="section__subtitle-2">
                  Sobre<span> Nós</span>
                </span>
                <h2
                  className="section__title-2"
                  style={{ textTransform: 'initial' }}
                >
                  Nossa Missão é sua Satisfação
                </h2>
              </div>
              <p>
                A B2L Utilidades é uma empresa especializada na venda de
                utilidades diversos, oferecendo uma ampla variedade de produtos
                de qualidade. Seu catálogo inclui Garrafas Térmicas, Fidget Hand
                Spinners, Mochilas para Laptop e muito mais. Com um atendimento
                eficiente ao cliente, a B2L Utilidades se destaca por oferecer
                produtos de altíssima qualidade, modernos e com preços
                acessíveis.
              </p>
              <div className="about__features-box">
                <div className="about__features-item">
                  <div className="about__features-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="about__features-content">
                    <p>Priorizamos a sua Satisfação</p>
                    <p>
                      - Com garantia e facilidade nos processos de devolução.
                    </p>
                  </div>
                </div>
                <div className="about__features-item">
                  <div className="about__features-icon s-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="about__features-content">
                    <p>Utilidades Práticos e Modernos</p>
                    <p>- Muita variedade e qualidade no catálogo.</p>
                  </div>
                </div>
                <div className="about__features-item">
                  <div className="about__features-icon s-3">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="about__features-content">
                    <p>Rápida Entrega</p>
                    <p>
                      - Recebemos o pedido e entregamos num piscar de olhos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper mb-60">
              <div className="about__thumb">
                <Image src={Five} alt="image not found" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__shape-1">
        <Image src={One} alt="image not found" unoptimized />
      </div>
      <div className="about__shape-2">
        <Image src={Two} alt="image not found" unoptimized />
      </div>
      <div className="about__shape-3">
        <Image src={Three} alt="image not found" unoptimized />
      </div>
      <div className="about__shape-4">
        <Image src={Four} alt="image not found" unoptimized />
      </div>
    </div>
  );
};

export default AboutMission;
