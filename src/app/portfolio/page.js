import Card from "../components/organisms/card";
import { reqUrl } from '../config';
import { reqUrlAcf } from '../config';
import ContactForm from "../components/organisms/contactForm";

export const metadata = {
  title: "Kevin Boere | Portfolio",
};

const Portfolio = async () => {
    let portfolioPosts = [];

    try {
        const req = await fetch(`${reqUrl}/portfolio?acf_format=standard&_fields=id,slug,title,acf`);
        
        if (!req.ok) {
            throw new Error('Network response was not ok');
        }

        portfolioPosts = await req.json();
    } catch (error) {
        console.error('Error fetching portfolio posts:', error);
    }

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

    // Define column spans for each card
    const columnSpans = ['md:col-span-6', 'md:col-span-6', '!aspect-square md:col-span-3', 'md:col-span-6', '!aspect-square md:col-span-3'];

    const data = await res.json();
    const homeContactData = data.acf?.home_contact || null;

    return (
        <div className="container mx-auto p-8 pb-16">
            <section>
                <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
                <p className="text-lg text-center mb-8">Here are some of my projects</p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                    {portfolioPosts.map((post, index) => (
                        <Card
                            key={post.id}
                            title={post.title.rendered}
                            thumbnail={post.acf.thumbnail || '/images/default-thumbnail.png'} // Fallback thumbnail
                            btnLabel={post.slug}
                            slug={post.slug}
                            extra_class={columnSpans[index % columnSpans.length]} // Cycle through column spans
                        />
                    ))}
                </div>
            </section>

            <ContactForm homeContactData={homeContactData} />
        </div>
    );
}

export default Portfolio;
