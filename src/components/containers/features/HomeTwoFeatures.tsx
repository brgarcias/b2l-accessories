import React, { useState } from 'react';
import Image from 'next/image';
import One from 'public/assets/img/shape/features-shape.png';
import Two from 'public/assets/img/features/02.png';

const HomeTwoFeatures = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section
      id="questions"
      className="features__area p-relative features-bg pt-120 pb-30 cus-faq"
    >
      <div className="features__pattern">
        <Image src={One} alt="image not found" unoptimized />
      </div>
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-6 col-lg-6">
            <div className="features__thumb-wrapper mb-60">
              <div className="features__thumb">
                <Image src={Two} alt="b2lbrindes" unoptimized />
              </div>
              <div className="features__cercle-1"></div>
              <div className="features__cercle-2 s-2"></div>
              <div className="features__shape-1">
                <div className="features__shape-content">
                  <div className="features__traffic">
                    <div className="content">
                      <span>Sempre Evoluindo!</span>
                      <h5>B2L ACESSÓRIOS</h5>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.953"
                        height="11.624"
                        viewBox="0 0 18.953 11.624"
                      >
                        <g id="trending-up" transform="translate(1.414 1.414)">
                          <path
                            id="Path_473"
                            data-name="Path 473"
                            d="M17.125,6l-6.963,6.963L6.5,9.3,1,14.8"
                            transform="translate(-1 -6)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <path
                            id="Pathccx_474"
                            data-name="Path 474"
                            d="M17,6h4.4v4.4"
                            transform="translate(-5.273 -6)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="persentence">
                    <h6>100% Confiável</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="features__content-wrapper">
              <div className="section__title-wrapper mb-25">
                <span className="section__subtitle">
                  <span>dúvidas</span> frequentes
                </span>
                <h2
                  className="section__title"
                  style={{ textTransform: 'none' }}
                >
                  <span className="down__mark-line">Possui alguma?</span>
                  <br />
                  Pergunte-nos
                </h2>
              </div>
              <div className="bd-faq__wrapper mb-60">
                <div
                  className="bd-faq__accordion"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          type="button"
                          className={
                            (imgTab == 0 ? '  ' : ' collapsed') +
                            ' accordion-button'
                          }
                          onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                        >
                          <span style={{ width: '85%' }}>
                            Qual é o prazo de entrega dos produtos da
                            B2L Acessórios?
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse${
                          imgTab === 0 ? ' show ' : ''
                        }`}
                      >
                        <div className="accordion-body">
                          <p>
                            O prazo de entrega dos produtos da B2L Acessórios
                            pode variar dependendo da sua localização e do
                            método de envio selecionado. Geralmente, os prazos
                            estimados são exibidos durante o processo de compra,
                            antes de finalizar o pedido. Caso tenha alguma
                            dúvida específica sobre o prazo de entrega de um
                            produto em particular, recomendamos entrar em
                            contato com o atendimento ao cliente da
                            B2L Acessórios. Em até 48h.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className={
                            (imgTab == 1 ? '  ' : ' collapsed') +
                            ' accordion-button'
                          }
                          onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                        >
                          <span style={{ width: '85%' }}>
                            A B2L Acessórios aceita devoluções ou trocas?
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse${
                          imgTab === 1 ? ' show ' : ''
                        }`}
                      >
                        <div className="accordion-body">
                          <p>
                            Sim, a B2L Acessórios aceita devoluções e trocas de
                            produtos dentro do prazo estipulado pela política de
                            devolução da loja. É importante verificar as
                            condições específicas de devolução e troca na página
                            de informações ou na política de devolução da
                            B2L Acessórios. Caso precise realizar uma devolução
                            ou troca, entre em contato com o atendimento ao
                            cliente para obter as instruções adequadas.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={
                            (imgTab == 2 ? '  ' : ' collapsed') +
                            ' accordion-button'
                          }
                          onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                        >
                          <span style={{ width: '85%' }}>A B2L Acessórios oferece frete grátis?</span>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse${
                          imgTab === 2 ? ' show ' : ''
                        }`}
                      >
                        <div className="accordion-body">
                          <p>
                            A B2L Acessórios pode oferecer frete grátis em
                            determinadas condições, como quantidade mínima de
                            itens na compra ou promoções especiais. Recomendamos
                            verificar se há alguma oferta de frete grátis sendo
                            oferecida no momento da sua compra. Caso não haja, o
                            valor do frete será calculado com base no seu
                            endereço de entrega e no peso/volume dos produtos
                            adquiridos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className={
                            (imgTab == 3 ? '  ' : ' collapsed') +
                            ' accordion-button'
                          }
                          onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                        >
                          <span style={{ width: '85%' }}>
                            A B2L Acessórios possui um serviço de atendimento ao
                            cliente?
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className={`accordion-collapse collapse${
                          imgTab === 3 ? ' show ' : ''
                        }`}
                      >
                        <div className="accordion-body">
                          <p>
                            Sim, a B2L Acessórios possui um serviço de
                            atendimento ao cliente dedicado a ajudar os clientes
                            com quaisquer dúvidas, problemas ou solicitações.
                            Você pode entrar em contato com o atendimento ao
                            cliente da B2L Acessórios por meio do canal de
                            comunicação disponibilizado na página da loja ou
                            enviar seu <a href="#contact">contato</a>. Nossa
                            equipe estará pronta para ajudar e oferecer suporte.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoFeatures;
