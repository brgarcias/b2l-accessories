import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer__copyright">
        <div className="container">
          <div className="copyright__inner">
            <div className="copyright__logo">
              <div className="touch__social">
                <Link href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href="/">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link href="/">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
            <div className="copyright__text text-center">
              <p>
                Copyright © {new Date().getFullYear()} B2L All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
