import Card from "../components/organisms/card";
import { reqUrl } from '../config';

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

    return (
        <div className="container mx-auto p-8 pb-16">
            <section>
                <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
                <p className="text-lg text-center mb-8">Here are some of my projects</p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    {portfolioPosts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title.rendered}
                            thumbnail={post.acf.thumbnail || '/images/default-thumbnail.png'} // Fallback thumbnail
                            btnLabel={post.slug}
                            slug={post.slug}
                            extra_class="after:content-[''] after:block after:inset-0 after:absolute after:bg-black after:left-4"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
