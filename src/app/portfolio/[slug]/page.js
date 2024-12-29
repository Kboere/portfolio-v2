import Image from "next/image";
import { reqUrl } from "../../config";
import { reqUrlAcf } from "../../config";
import ContactForm from "../../components/organisms/contactForm";

const imageStyle = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

const PortfolioItems = async ({ params }) => {
  console.log("params", params);
  const req = await fetch(
    `${reqUrl}/portfolio?acf_format=standard&_fields=id,slug,title,acf&slug=${params.slug}`
  );
  const portfolioItems = await req.json();
  const post = portfolioItems[0];

  const res = await fetch(
    `${reqUrlAcf}/options/options?timestamp=${new Date().getTime()}`,
    {
      headers: {
        cache: "no-store", // Disable browser cache
        Pragma: "no-cache", // Disable legacy cache
        Expires: "0", // Expire immediately
        "Cache-Control": "no-cache, no-store", // Prevent caching in any layer
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const homeContactData = data.acf?.home_contact || null;

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">
          {post.title.rendered}
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <section>
            <Image
              src={post.acf.large_image}
              alt="Placeholder"
              width={400}
              height={200}
              style={imageStyle}
              placeholder="blur"
              blurDataURL="/images/dummy.png"
            />
          </section>
          <section>
            <p className="text-md font-semibold mb-1">Description</p>
            <p className="text-lg mb-8">{post.acf.desc_item}</p>
          </section>
        </div>
      </section>

      <ContactForm homeContactData={homeContactData} />
    </div>
  );
};
export default PortfolioItems;
