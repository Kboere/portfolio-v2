import Link from "next/link";
import P from "./atoms/p";

const Footer = async () => {
  // Fetch Footer Data
  let footerData = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REQURL_ACF}/options/options?timestamp=${new Date().getTime()}`);
    if (!res.ok) throw new Error('Failed to fetch ACF options footer');
    const data = await res.json();
    footerData = data.acf?.social_media_icons || null;

  } catch (error) {
    console.error('Error fetching ACF options:', error);
  }

  return (
    <footer className="relative z-10 flex sm:flex-row justify-center py-4 space-x-4">
        {/* Loop Through Social Media Links */}
        {footerData?.icon_links?.map((item, index) => {
          const linkData = item.icon_link;
          const imageData = item.icon_image;

          return (
            <Link key={index} href={linkData.url || "#"} target={linkData.target || "_blank"} rel="noreferrer">
              {imageData?.url ? (
                <img
                  src={imageData.url}
                  alt={imageData.title || "Icon"}
                  className="h-6 w-6"
                />
              ) : (
                <span>{linkData.title}</span>
              )}
            </Link>
          );
        })}

      {/* copyright */}
      <P text={footerData?.copyright_titel} />
    </footer>
  );
};

export default Footer;
