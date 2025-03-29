import './Footer.scss';
import Image from 'next/image';

function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <a className='footer__logo-link' href="#">
            <Image className='footer__logo-img' src="/images/icons/logo-light.svg" alt="logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;