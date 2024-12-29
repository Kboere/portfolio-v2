"use client";

import { useEffect, useState } from 'react';
import TransitionLink from "./transitionLink";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on resize event and initial load
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle click on mobile menu and toggle visibility
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

    // Update navbar class on screen resize or initial load
    updateNavbarClass();

    // Handle mobile menu click event to toggle 'show' class
    const handleMenuClick = () => {
      navbar.classList.toggle('show');
      header.classList.toggle('has-mobile-menu');

      document.body.style.overflow = navbar.classList.contains('show') ? 'hidden' : 'auto';
      console.log('clicked'); // Log the click
    };

    // Add event listener for mobile menu click
    if (mobileMenu) {
      mobileMenu.removeEventListener('click', handleMenuClick); // Cleanup old listener
      mobileMenu.addEventListener('click', handleMenuClick); // Add new listener
    }

    // Cleanup the event listener when the component unmounts or is updated
    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener('click', handleMenuClick);
      }
    };
  }, [isMobile]); // Re-run effect when 'isMobile' state changes

  return (
    <nav className="w-full lg:w-fit lg:mt-4 flex justify-between flex-row lg:flex-col h-full order-1 lg:order-2">
      <div id="mobile-menu" className="absolute lg:hidden cursor-pointer">
        <span>navigation mobile</span>
        <span>icon</span>
      </div>

      <ul
        id="navbar"
        className="lg:relative lg:flex lg:mt-16 content-start flex-wrap flex-row lg:flex-col gap-12 order-2 lg:order-1"
      >
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways">
          <TransitionLink href="/portfolio" label="Projects" />
        </li>
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways">
          <TransitionLink href="/#contact" label="Contact" />
        </li>
      </ul>

      <ul className='order-1 lg:order-2'>
        <li className="text-lg lg:writing-mode-sideways-lr lg:text-orientation-sideways [>a]:mix-blend-darken">
          <TransitionLink href="/about-me" label="About me">
            <img className="w-fit" src="/images/dots.svg" alt="Logo" />
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
