import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "Kevin Boere",
  description: "Headless WordPress with Next.js",
};

const RootLayout = ({ children }) => (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
);

export default RootLayout;
