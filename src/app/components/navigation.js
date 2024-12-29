"use client";

import { useEffect, useState } from 'react';
import TransitionLink from "./transitionLink";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on resize event and initial load
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Check if the screen is mobile-sized
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle click on mobile menu and toggle visibility
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');

    // Function to add/remove 'mobile-menu' and 'show' classes based on screen size
    const updateNavbarClass = () => {
      if (isMobile) {
        navbar.classList.add('mobile-menu'); // Add 'mobile-menu' class when screen size <= 1024px
      } else {
        navbar.classList.remove('mobile-menu'); // Remove 'mobile-menu' class when screen size > 1024px
      }
    };

    // Update navbar class on screen resize or initial load
    updateNavbarClass();

    // Handle mobile menu click event to toggle 'show' class
    const handleMenuClick = () => {
      navbar.classList.toggle('show'); // Add or remove the 'show' class on click
      // Lock or unlock scrolling when mobile menu is clicked
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
    <nav className="w-full lg:w-fit lg:mt-4 flex justify-between flex-row lg:flex-col h-full">
      <div id="mobile-menu" className="absolute lg:hidden cursor-pointer">
        <span>navigation mobile</span>
        <span>icon</span>
      </div>

      {/* Navbar menu with 'hidden' by default on mobile */}
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

      <ul>
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
