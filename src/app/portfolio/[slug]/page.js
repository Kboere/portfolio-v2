import { reqUrl, reqUrlAcf } from "../../config";
import PortfolioItemContent from "../../components/organisms/PortfolioItemContent"; // Import client component

export const metadata = {
  title: 'Kevin Boere | Portfolio | Item',
};

const PortfolioItems = async ({ params }) => {
  const req = await fetch(
    `${reqUrl}/portfolio?acf_format=standard&_fields=id,slug,title,acf&slug=${params.slug}`,
    { cache: "no-store" } // Ensure fresh data
  );
  const portfolioItems = await req.json();
  const post = portfolioItems[0];

  const res = await fetch(
    `${reqUrlAcf}/options/options?timestamp=${new Date().getTime()}`,
    {
      headers: {
        cache: "no-store",
        Pragma: "no-cache",
        Expires: "0",
        "Cache-Control": "no-cache, no-store",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const homeContactData = data.acf?.home_contact || null;

  return (
    <PortfolioItemContent post={post} homeContactData={homeContactData} />
  );
};

export default PortfolioItems;
