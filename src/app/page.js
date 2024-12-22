import { reqUrlAcf } from "./config";
import HomeHero from "./components/organisms/home-hero";
import HomeAbout from "./components/organisms/home-about";
import ContactForm from "./components/organisms/contactForm";

export default async function Home() {
  const res = await fetch(`${reqUrlAcf}/options/options`, {
    headers: {
      cache: "no-store",
      Pragma: "no-cache",
      Expires: "0",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const homeData = data.acf?.hero_home || null;
  const homeAboutData = data.acf?.over_sectie || null;

  return (
    <>
      <HomeHero homeData={homeData} />
      <HomeAbout homeAboutData={homeAboutData} />

      <ContactForm />
    </>
  );
}
