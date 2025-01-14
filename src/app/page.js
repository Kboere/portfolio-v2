import HomeHero from "./components/organisms/home-hero";
import HomeAbout from "./components/organisms/home-about";
import ContactForm from "./components/organisms/contactForm";

export const metadata = {
  title: "Kevin Boere",
  description: "Headless WordPress with Next.js",
};

// Define cache control headers to prevent caching issues
const FETCH_HEADERS = {
  cache: "no-store",  // Ensure fresh data by preventing browser caching
  Pragma: "no-cache",  // Legacy HTTP 1.0 cache control
  Expires: "0",  // Forces expiration immediately
  'Cache-Control': 'no-cache, no-store',  // Explicitly disable caching in all layers
};

/**
 * Fetch home page data from WordPress API.
 * @returns {Promise<{ homeData: object, homeAboutData: object, homeContactData: object }>}
 */
async function fetchHomeData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REQURL_ACF}/options/options?timestamp=${Date.now()}`, {
      headers: FETCH_HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      homeData: data.acf?.hero_home || null,
      homeAboutData: data.acf?.over_sectie || null,
      homeContactData: data.acf?.home_contact || null,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { homeData: null, homeAboutData: null, homeContactData: null };
  }
}

export default async function Home() {
  const { homeData, homeAboutData, homeContactData } = await fetchHomeData();

  return (
    <>
      <HomeHero homeData={homeData} />
      <HomeAbout homeAboutData={homeAboutData} />
      <ContactForm homeContactData={homeContactData} />
    </>
  );
}
