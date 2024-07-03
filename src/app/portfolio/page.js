import Card from "../components/card";
import { reqUrl } from '../config';

export const metadata = {
  title: "Kevin Boere | Portfolio",
};

const Portfolio = async () => {
    const req = await fetch(`${reqUrl}/portfolio?acf_format=standard&_fields=id,slug,title,acf`);
    const portfolioPosts = await req.json();

    // console.log('portfolio items', portfolioPosts);

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
        <p className="text-lg text-center mb-8">Here are some of my projects</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {portfolioPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title.rendered}
              thumbnail={post.acf.thumbnail}
            //   subtitle={post.acf.desc_item}
              btnLabel="View Project"
              slug={`${post.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
