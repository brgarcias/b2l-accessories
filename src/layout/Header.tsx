import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

import Logo from '@/public/assets/images/logo/b2l-logo.jpg';

const Header = () => {

  useEffect(() => {
    document.querySelector('body').classList.remove('no-scroll');
  }, []);
  return (
    <header className="header">
      <div className="header__builder">
        {/* logo */}
        <div className="logo-image">
          <Link legacyBehavior href="/">
            <a>
              <Image
                src={Logo}
                alt="b2l-logo"
                fill
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
