import { reqUrlAcf } from "./config";
import Content from "./components/molecules/content";

export default async function Home() {
  // Fetch the data from the REST API
  const response = await fetch(`${reqUrlAcf}/options/options`, {
    cache: "no-store", 
  });

  if (!response.ok) {
    console.error("Failed to fetch ACF data");
    return null;
  }

  const data = await response.json();
  const acfData = data.acf;

  const { hero_home } = acfData;

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 z-20">
      <div className="hero">
        <Content 
          title={hero_home?.titel} 
        />
      </div>
    </section>
  );
}
