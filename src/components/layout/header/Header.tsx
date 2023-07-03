import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/assets/img/logo/b2l-logo-transparency.png';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
    };

    window.addEventListener('resize', handleResizeHeader);

    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="fix">
        <div className={(toggleMenu ? ' info-open' : ' ') + ' offcanvas__info'}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="mobile-menu fix mb-40 mean-container">
                <div className="mean-bar d-block d-lg-none">
                  <nav className="mean-nav">
                    <ul>
                      <li onClick={handleToggleMenu}>
                        <Link href="#about">Sobre Nós</Link>
                      </li>
                      <li onClick={handleToggleMenu}>
                        <Link href="#products">Produtos</Link>
                      </li>
                      <li onClick={handleToggleMenu}>
                        <Link href="#questions">Dúvidas</Link>
                      </li>
                      <li onClick={handleToggleMenu}>
                        <Link href="#clients">Clientes</Link>
                      </li>
                      <li className="mean-last" onClick={handleToggleMenu}>
                        <Link href="#contact">Contato</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contato</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+5511945058769" aria-label="Contact Us">
                        +55 (11) 945058769
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link
                        href="mailto:alex39396@gmail.com"
                        aria-label="Contact Us"
                      >
                        <span className="mailto:alex39396@gmail.com">
                          alex39396@gmail.com
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/profile.php?id=100004238262682&mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/b2lacessorios?igshid=MzNlNGNkZWQ4Mg=="
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    {/* <Link href="https://shp.ee/3p3hha5" target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48" opacity={0.5}>
                            <path d="M 24 1 C 19.015304 1 15.187203 5.491076 14.589844 11 L 5.5917969 11 A 1.50015 1.50015 0 0 0 4.09375 12.587891 L 5.7773438 41.234375 A 1.50015 1.50015 0 0 0 5.7773438 41.236328 C 5.901433 43.336252 7.6680925 45 9.7714844 45 L 38.228516 45 C 40.332664 45 42.096549 43.335805 42.220703 41.236328 A 1.50015 1.50015 0 0 0 42.220703 41.234375 L 43.90625 12.587891 A 1.50015 1.50015 0 0 0 42.408203 11 L 33.410156 11 C 32.812797 5.491076 28.984696 1 24 1 z M 24 4 C 27.044271 4 29.834574 6.9017187 30.392578 11 L 17.607422 11 C 18.165426 6.9017187 20.955729 4 24 4 z M 7.1816406 14 L 40.818359 14 L 39.226562 41.058594 C 39.194717 41.597117 38.768367 42 38.228516 42 L 9.7714844 42 C 9.2308762 42 8.8033952 41.598623 8.7714844 41.058594 L 7.1816406 14 z M 24.074219 17.011719 C 20.135219 17.011719 17.164063 19.515937 17.164062 22.835938 C 17.164062 26.625937 20.635828 27.892109 23.423828 28.912109 C 26.744828 30.126109 28.308594 30.929062 28.308594 33.039062 C 28.308594 34.694063 26.349453 36.041016 23.939453 36.041016 C 21.113453 36.041016 18.640234 33.938969 18.615234 33.917969 L 18.490234 33.802734 C 18.397234 33.717734 18.277344 33.671875 18.152344 33.671875 C 18.133344 33.671875 18.11375 33.671828 18.09375 33.673828 C 17.94975 33.690828 17.819281 33.770625 17.738281 33.890625 L 16.632812 35.519531 C 16.487813 35.733531 16.529469 36.0235 16.730469 36.1875 L 16.84375 36.279297 C 17.62975 36.916297 20.4575 38.988281 23.9375 38.988281 C 28.0415 38.988281 31.257813 36.376062 31.257812 33.039062 C 31.259813 28.637063 27.477453 27.254531 24.439453 26.144531 C 21.498453 25.069531 20.113281 24.392938 20.113281 22.835938 C 20.113281 21.169937 21.778219 19.960938 24.074219 19.960938 C 25.743219 19.960938 27.216312 20.620672 27.945312 21.013672 C 28.062313 21.076672 28.414281 21.287875 28.613281 21.421875 L 28.751953 21.513672 C 28.834953 21.569672 28.931297 21.597656 29.029297 21.597656 C 29.065297 21.597656 29.100719 21.594891 29.136719 21.587891 C 29.269719 21.558891 29.384078 21.475375 29.455078 21.359375 L 30.466797 19.714844 C 30.608797 19.484844 30.540453 19.181203 30.314453 19.033203 L 30.148438 18.925781 C 29.299437 18.353781 26.997219 17.011719 24.074219 17.011719 z"></path>
                          </svg>
                        </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(toggleMenu ? ' overlay-open' : ' ') + ' offcanvas__overlay'}
        onClick={() => setToggleMenu(false)}
      ></div>
      <div className="offcanvas__overlay-white"></div>
      <header>
        <div
          id="header-sticky"
          className={
            (scrolled ? ' sticky' : ' ') +
            ' header__area-3 header__transparent head-alter'
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="header__logo">
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="logo not found"
                      priority
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="menu__main-wrapper-3 d-flex justify-content-end">
                  <div className="main-menu main-menu-3 d-none d-lg-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="#about">Sobre Nós</Link>
                        </li>
                        <li>
                          <Link href="#products">Produtos</Link>
                        </li>
                        <li>
                          <Link href="#questions">Dúvidas</Link>
                        </li>
                        <li>
                          <Link href="#clients">Clientes</Link>
                        </li>
                        <li>
                          <Link href="#contact">Contato</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="header__right d-flex align-items-center justify-content-end">
                  {/* <div className="header__btn d-none d-xl-block">
                    <Link
                      className="border-btn text-dark bg-warning border border-dark text-center ms-3 borderc-btn"
                      href="#contact"
                    >
                      Seguir na Shopee
                    </Link>
                  </div> */}
                  <div className="header__toggle d-xl-none">
                    <button
                      className="sidebar__active"
                      aria-label="Toggle Sidebar"
                      onClick={handleToggleMenu}
                    >
                      <div className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
