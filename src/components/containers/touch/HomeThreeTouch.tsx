import React from 'react';
import Link from 'next/link';

const HomeThreeTouch = () => {
  return (
    <section
      id="contact"
      className="touch__arae touch-bg include__bg pt-90 pb-90"
      data-background="assets/img/shape/touch-shape.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="touch__left mb-60">
              <div className="section__title-wrapper">
                <span className="section__subtitle s-2">
                  <span>Entrar </span>em contato
                </span>
                <h2 className="section__title s-2 mb-30">
                  <span className="down__mark-line">Vamos</span> Conversar
                </h2>
              </div>
              <p>
                Nossa satisfação é ter você com a gente, por isso selecionamos as melhores ofertas!
              </p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="touch__contact p-relative">
              <div className="touch__carcle"></div>
              <div className="touch__content-title">
                <h3>Fale Conosco</h3>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <input type="text" placeholder="Nome Completo" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <input type="text" placeholder="Telefone" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <input type="text" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact__select mb-20">
                      <select>
                        <option value="" selected disabled hidden>Selecione um Assunto</option>
                        <option value="reembolso">Reembolso</option>
                        <option value="prazos">Prazos</option>
                        <option value="devolução">Devolução</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="touch__input">
                      <textarea id="suggestions" name="suggestions" rows={5} placeholder="Sugestões e/ou Dúvidas" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="touch__submit">
                      <div className="sign__action">
                        <input
                          className="e-check-input"
                          type="checkbox"
                          id="sing-up"
                        />
                        <label className="sign__check" htmlFor="sing-up">
                          Aceitar nossos{' '}
                          <span>
                            <Link href="/terms">Termos</Link> &{' '}
                            <Link href="/conditions">Condições</Link>
                          </span>
                        </label>
                      </div>
                      <div className="touch__btn">
                        <button type="button"></button>
                        <button className="border__btn" type="submit">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeTouch;
