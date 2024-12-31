"use client";

import { usePathname } from 'next/navigation'; // Import usePathname hook
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const RootLayout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  // Define default background color
  let bgColor = 'bg-primary text-secondary'; // Default background color
  let blobs = 'blobs-primary';

  // Check the pathname and set the background color accordingly
  if (pathname === '/about') {
    bgColor = 'bg-dark bg-secondary text-primary'; // Set custom color for the About page
    blobs = 'bg-dark';
  }

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={`${bgColor}`}>
        <div className={`${blobs} container-shapes`}>
          <div className="shape-blob"></div>
          <div className="shape-blob one"></div>
          <div className="shape-blob two"></div>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
