import React from 'react';
import Image from 'next/image';
import Two from 'public/assets/img/index-4/client-qt.png';
import Four from 'public/assets/img/index-4/sheap-yellow.png';
import Five from 'public/assets/img/index-4/star-red.png';
import David from 'public/assets/img/feedback/david_harbor.jpg';
import Rebeca from 'public/assets/img/feedback/rebeca_delorian.jpg';
import Nakajima from 'public/assets/img/feedback/nakajima_osaka.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';

const FeedbackFour = () => {
  return (
    <div id="clients" className="about-us-section pt-90 pb-90 cus-caro">
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <h2 className=" mb-4 mb-md-5">
                  Nossos clientes{' '}
                  <span style={{ color: '#F0AD00' }}>Satisfeitos</span>
                </h2>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: '.carousel-control-next',
                    prevEl: '.carousel-control-prev',
                  }}
                  className="carousel__active"
                >
                  <SwiperSlide>
                    <div className="carousel-item active">
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <div>
                          <p className="mb-4">
                            Estou super satisfeito com minha experiência de
                            compra na B2L Acessórios! Comprei uma garrafa térmica
                            e ela chegou em perfeito estado, além de ser linda e
                            manter minha bebida quente por horas. Recomendo essa
                            loja para quem busca acessórios de qualidade!
                          </p>
                          <h5>David Harbor</h5>
                          <h6>Comprador Sênior</h6>
                        </div>
                        <div className="client-img position-relative">
                          <Image
                            className="client-avatar"
                            src={David}
                            alt="Image"
                            unoptimized
                          />
                          <Image
                            className="client-qt"
                            src={Two}
                            alt="Image"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="carousel-item">
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <div>
                          <p className="mb-4">
                            Comprei um Spinner na B2L Acessórios e fiquei muito
                            feliz com a minha escolha. O produto chegou antes do
                            prazo previsto e é de excelente qualidade. O
                            atendimento ao cliente também foi ótimo, com
                            respostas rápidas e prestativas. Com certeza
                            voltarei a comprar nesta loja!
                          </p>
                          <h5>Rebeca Delorian</h5>
                          <h6>Consultora de RH</h6>
                        </div>
                        <div className="client-img position-relative">
                          <Image
                            className="client-avatar"
                            src={Rebeca}
                            alt="Image"
                            unoptimized
                          />
                          <Image
                            className="client-qt"
                            src={Two}
                            alt="Image"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="carousel-item">
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <div>
                          <p className="mb-4">
                            Estou extremamente satisfeito com a mochila de
                            laptop que comprei na B2L Acessórios. Ela possui um
                            design moderno e é muito espaçosa, permitindo que eu
                            transporte meu laptop de forma segura e ainda tenha
                            espaço para outros itens essenciais.
                          </p>
                          <h5>Nakajima Osaka</h5>
                          <h6>Engenheiro Civíl</h6>
                        </div>
                        <div className="client-img position-relative">
                          <Image
                            className="client-avatar"
                            src={Nakajima}
                            alt="Image"
                            unoptimized
                          />
                          <Image
                            className="client-qt"
                            src={Two}
                            alt="Image"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-thumbs">
        <Image
          className="position-absolute left"
          src={Four}
          alt="Image"
          unoptimized
        />
        <Image
          className="position-absolute right"
          src={Five}
          alt="Image"
          unoptimized
        />
      </div>
    </div>
  );
};

export default FeedbackFour;
