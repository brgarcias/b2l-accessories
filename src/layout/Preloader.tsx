import Image from 'next/image';

import Logo from "@/public/assets/images/logo/b2l-logo.jpg"

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <Image
              src={Logo}
              alt="b2l-logo"
              fill
            />
            <div className="spinner-dot" />
            <div className="spinner spinner-line" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
