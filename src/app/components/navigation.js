"use client";

import { useEffect, useState } from 'react';
import TransitionLink from "./transitionLink";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  // check if windows size is mobile and add class to header
  useEffect(() => {
    const handleResize = () => {
      const header = document.getElementById('header');
      const isMobileView = window.innerWidth <= 1024;

      setIsMobile(isMobileView);

      if (header) {
        if (isMobileView) {
          header.classList.add('is-mobile');
        } else {
          header.classList.remove('is-mobile');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add class to header when scrolling
   useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');

      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add class to navbar when mobile menu is clicked
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');

    const updateNavbarClass = () => {
      if (isMobile) {
        navbar.classList.add('mobile-menu'); 
      } else {
        header.classList.remove('has-mobile-menu');
        navbar.classList.remove('mobile-menu');
      }
    };

    updateNavbarClass();

    const handleMenuClick = () => {
      navbar.classList.toggle('show');
      header.classList.toggle('has-mobile-menu');
    };

    // Add event listener for mobile menu click
    if (mobileMenu) {
      mobileMenu.removeEventListener('click', handleMenuClick); // Cleanup old listener
      mobileMenu.addEventListener('click', handleMenuClick); // Add new listener
    }

  }, [isMobile]);


  return (
    <nav className="w-full lg:w-fit lg:mt-4 flex justify-between flex-row lg:flex-col h-full order-1 lg:order-2">
      <div id="mobile-menu" className="absolute lg:hidden cursor-pointer">
        <span>navigation mobile</span>
        <span>icon</span>
      </div>

      {/* Navigation links */}
      <ul
        id="navbar"
        className="lg:relative lg:flex lg:mt-16 content-start flex-wrap flex-row lg:flex-col gap-12 order-2 lg:order-1"
      >
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways">
          <TransitionLink href="/portfolio" label="Projects" />
        </li>
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways">
          <a href="#contact-form">Contact</a>
        </li>
      </ul>

    {/* About me section with logo */}
      <ul className='order-1 lg:order-2'>
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways [>a]:mix-blend-darken">
          <TransitionLink href="/about" label="About me">
            <img className="w-fit" src="/images/dots.svg" alt="Logo" />
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
