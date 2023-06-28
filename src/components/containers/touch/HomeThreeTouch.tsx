import React, { useState } from 'react';
import Link from 'next/link';
import { isEmpty } from 'lodash';

import SnackbarFeedback from '../snackbar';

import InputControl from './input';
import SelectControl from './select';

const HomeThreeTouch = () => {
  const [nameValue, setNameValue] = useState('');
  const [whatsappValue, setWhatsappValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [suggestionValue, setSuggestionValue] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    title: '',
    description: '',
    icon: '',
    colorIcon: '',
  });
  const [errorsState, setErrorsState] = useState({
    nameValue: false,
    whatsappValue: false,
    emailValue: false,
    subjectValue: false,
    suggestionValue: false,
  });

  const validateField = (fieldName: string, value: any) => {
    if (!isEmpty(value))
      return setErrorsState((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    setErrorsState((prevState) => ({ ...prevState, [fieldName]: true }));
  };

  const formatWhatsappBR = (input: string) => {
    const inputFormatted = input.replace(/\D/g, '');
    const regex = /^(\d{2})(\d{5})(\d{4})$/;

    if (regex.test(inputFormatted)) {
      input = inputFormatted.replace(regex, '($1) $2-$3');
    } else {
      input = inputFormatted;
      validateField('whatsappValue', null);
    }
    return input;
  };

  const formatEmail = (input: string) => {
    const inputFormatted = input.trim();
    const regex =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(inputFormatted)) {
      validateField('emailValue', inputFormatted);
    } else {
      validateField('emailValue', null);
    }
    return inputFormatted;
  };

  const submitForm = async (data) => {
    data.preventDefault();
    setSubmitting(true);
    Object.entries(errorsState).map((item, index) => {
      validateField(item[0], data.target[index].value);
    });
    if (Object.values(errorsState).every((item) => item === false)) {
      const dataToSend = {
        fullName: nameValue,
        whatsapp: whatsappValue,
        email: emailValue,
        subject: subjectValue,
        suggestions: suggestionValue,
      };
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...dataToSend,
        }).toString(),
      })
        .then((response) => {
          if (response.ok) {
            setSubmitting(false);
            setOpenSnackbar({
              open: true,
              title: 'Formulário Enviado',
              description: 'Muito obrigado pela sua mensagem!',
              icon: 'fa-light fa-check',
              colorIcon: '#66bb6a',
            });
          } else {
            console.error('Erro ao enviar forms: ', response);
            setSubmitting(false);
            setOpenSnackbar({
              open: true,
              title: 'Tivemos um Problema',
              description: 'Ocorreu um erro ao enviar sua mensagem!',
              icon: 'fa-light fa-circle-exclamation',
              colorIcon: 'rgb(230, 154, 147)',
            });
          }
        })
        .catch((error) => {
          setSubmitting(false);
          console.error('Erro ao enviar formulário:', error);
          setOpenSnackbar({
            open: true,
            title: 'Tivemos um Problema',
            description: 'Ocorreu um erro ao enviar sua mensagem!',
            icon: 'fa-light fa-circle-exclamation',
            colorIcon: 'rgb(230, 154, 147)',
          });
        });
    }
    Object.entries(errorsState).map((item, index) => {
      validateField(item[0], data.target[index].value);
    });
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="touch__arae touch-bg include__bg pt-90 pb-90"
      data-background="assets/img/shape/touch-shape.png"
    >
      <SnackbarFeedback content={openSnackbar} setOpen={setOpenSnackbar} />
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
                Nossa satisfação é ter você com a gente, por isso selecionamos
                as melhores ofertas!
              </p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="touch__contact p-relative">
              <div className="touch__carcle"></div>
              <div className="touch__content-title">
                <h3>Fale Conosco</h3>
              </div>
              <form
                name="contact"
                className="contact-form row"
                data-netlify="true"
                netlify-honeypot="bot-field"
                method="post"
                onSubmit={submitForm}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <InputControl
                        type="text"
                        value={nameValue}
                        name="fullName"
                        placeholder="Nome Completo"
                        required
                        disabled={isSubmitting}
                        onChangeHandler={(e) => {
                          validateField('nameValue', e.target.value);
                          setNameValue(e.target.value);
                        }}
                        onFocusHandler={(_e) =>
                          validateField('nameValue', nameValue)
                        }
                        onBlurHandler={(e) =>
                          validateField('nameValue', e.target.value)
                        }
                        error={errorsState.nameValue}
                        helperText="Por favor, insira o nome completo."
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <InputControl
                        type="tel"
                        value={whatsappValue}
                        name="whatsapp"
                        placeholder="Whatsapp"
                        required
                        disabled={isSubmitting}
                        onChangeHandler={(e) => {
                          validateField('whatsappValue', e.target.value);
                          setWhatsappValue(formatWhatsappBR(e.target.value));
                        }}
                        onFocusHandler={(_e) =>
                          validateField('whatsappValue', whatsappValue)
                        }
                        onBlurHandler={(e) =>
                          validateField('whatsappValue', e.target.value)
                        }
                        error={errorsState.whatsappValue}
                        helperText="Por favor, coloque um número válido."
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="touch__input">
                      <InputControl
                        type="email"
                        value={emailValue}
                        name="email"
                        placeholder="E-mail"
                        required
                        disabled={isSubmitting}
                        onChangeHandler={(e) => {
                          validateField('emailValue', e.target.value);
                          setEmailValue(formatEmail(e.target.value));
                        }}
                        onFocusHandler={(_e) =>
                          validateField('emailValue', emailValue)
                        }
                        onBlurHandler={(e) =>
                          validateField('emailValue', e.target.value)
                        }
                        error={errorsState.emailValue}
                        helperText="Por favor, coloque um e-mail válido."
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact__select mb-20">
                      <SelectControl
                        value={subjectValue}
                        name="subject"
                        disabled={isSubmitting}
                        required
                        onChangeHandler={(e) => {
                          validateField('subjectValue', e.target.value);
                          setSubjectValue(e.target.value);
                        }}
                        onFocusHandler={(_e) =>
                          validateField('subjectValue', subjectValue)
                        }
                        onBlurHandler={(e) =>
                          validateField('subjectValue', e.target.value)
                        }
                        error={errorsState.subjectValue}
                        helperText="Por favor, selecione um assunto."
                      >
                        <option value="" disabled hidden>
                          Selecione um Assunto
                        </option>
                        <option value="reembolso">Reembolso</option>
                        <option value="prazos">Prazos</option>
                        <option value="devolução">Devolução</option>
                        <option value="outros">Outros</option>
                      </SelectControl>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="touch__input">
                      <InputControl
                        type="text"
                        value={suggestionValue}
                        name="suggestions"
                        placeholder="Sugestões e/ou Dúvidas"
                        required
                        disabled={isSubmitting}
                        multiline
                        minRows={5}
                        onChangeHandler={(e) => {
                          validateField('suggestionValue', e.target.value);
                          setSuggestionValue(e.target.value);
                        }}
                        onFocusHandler={(_e) =>
                          validateField('suggestionValue', suggestionValue)
                        }
                        onBlurHandler={(e) =>
                          validateField('suggestionValue', e.target.value)
                        }
                        error={errorsState.suggestionValue}
                        helperText="Por favor, escreva uma sugestão e/ou dúvida."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="touch__submit">
                      <div className="sign__action">
                        <input
                          className="e-check-input"
                          type="checkbox"
                          id="sing-up"
                          required
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
                        <button className="border__btn" type="submit">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-netlify-recaptcha="true" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeTouch;
