'use client';

import './Header.scss';
import Nav from '../nav/Nav';
import { useState, useEffect } from 'react';
import Image from 'next/image';


function Header() {
  const [ isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if(window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <a className="header__logo-link" href="#">
            <Image className="header__logo-img" src="/OctoCodeMaster/images/icons/logo-light.svg" alt="logo" />
          </a>
          <Nav />
          <button className="header__button button-secondary">Contact us</button>
        </div>
      </div>
    </header>
  )
}

export default Header;