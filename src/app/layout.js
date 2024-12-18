import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "Kevin Boere",
  description: "Headless WordPress with Next.js",
};

const RootLayout = ({ children }) => (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body>
      <div class="container-shapes">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
      </div>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
);

export default RootLayout;
