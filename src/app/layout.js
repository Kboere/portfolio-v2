"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const RootLayout = ({ children }) => {
  const pathname = usePathname();

  // Define default background color
  let bgColor = "bg-primary text-secondary";
  let blobs = "blobs-primary";

  // Check the pathname and set custom class
  if (pathname === "/about") {
    bgColor = "bg-dark";
    blobs = "bg-dark";
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
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
