import { reqUrlAcf } from "./config";
import HomeHero from "./components/organisms/home-hero";
import HomeAbout from "./components/organisms/home-about";
import ContactForm from "./components/organisms/contactForm";

export const metadata = {
  title: "Kevin Boere",
  description: "Headless WordPress with Next.js",
};

export default async function Home() {
  // Add timestamp to URL to avoid caching issues
  const res = await fetch(`${reqUrlAcf}/options/options?timestamp=${new Date().getTime()}`, {
    headers: {
      cache: "no-store",  // Disable browser cache
      Pragma: "no-cache",  // Disable legacy cache
      Expires: "0",  // Expire immediately
      'Cache-Control': 'no-cache, no-store',  // Prevent caching in any layer
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const homeData = data.acf?.hero_home || null;
  const homeAboutData = data.acf?.over_sectie || null;
  const homeContactData = data.acf?.home_contact || null;

  return (
    <>
      <HomeHero homeData={homeData} />
      <HomeAbout homeAboutData={homeAboutData} />
      <ContactForm homeContactData={homeContactData} />
    </>
  );
}
