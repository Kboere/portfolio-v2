import Card from '../components/organisms/card';
import ContactForm from '../components/organisms/contactForm';
import H1 from '../components/atoms/heading/h1';
import P from '../components/atoms/p';
import Filtering from '../components/molecules/filtering';

export const metadata = {
  title: 'Kevin Boere | Portfolio',
};

const Portfolio = async ({ searchParams }) => {
  const category = searchParams?.category || 'Show All';

  // Fetch portfolio posts with category filtering
  let portfolioPosts = [];
  try {
    let url = `${process.env.NEXT_PUBLIC_REQURL}/portfolio?acf_format=standard&_fields=id,slug,title,acf,portfolio-categorie&_embed`;

    // Append category filter if a specific category is selected
    if (category !== 'Show All') {
      url += `&portfolio-categorie=${encodeURIComponent(category)}`;
    }

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch portfolio posts');
    portfolioPosts = await res.json();
  } catch (error) {
    console.error('Error fetching portfolio posts:', error);
  }

  // Fetch categories for filtering options
  let categories = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REQURL}/portfolio-categorie`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch categories');
    categories = await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  // Fetch additional ACF options (contact form data, archive data)
  let contactData = null;
  let archiveData = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REQURL_ACF}/options/options?timestamp=${Date.now()}`, {
      headers: {
        'Cache-Control': 'no-cache, no-store',
      },
    });
    if (!res.ok) throw new Error('Failed to fetch ACF options');
    const data = await res.json();
    contactData = data.acf?.home_contact || null;
    archiveData = data.acf?.archive_projects || null;
  } catch (error) {
    console.error('Error fetching ACF options:', error);
  }

  // Define column spans for responsive grid layout
  const columnSpans = ['md:col-span-6', 'md:col-span-6', '!aspect-square md:col-span-3', 'md:col-span-6', '!aspect-square md:col-span-3'];

  return (
    <div className="container mx-auto p-8 pb-16">
      <section className="grid grid-cols-12">
        {/* Portfolio title and description */}
        <H1 title={archiveData?.titel_archive} className="col-span-12 text-mdisplay md:text-display uppercase font-bold text-center mb-8" />
        <P text={archiveData?.archive_desc} className="col-span-12 md:col-span-8 md:col-start-3 text-lg text-center mb-8" />

        {/* Filtering options */}
        <div className="col-span-12">
          <Filtering categories={categories} activeCategory={category} />
        </div>

        {/* Portfolio items grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {portfolioPosts.map((post, index) => (
            <Card
              key={post.id}
              title={post.title.rendered}
              thumbnail={post.acf?.thumbnail || '/images/default-thumbnail.png'}
              btnLabel={post.slug}
              slug={post.slug}
              extra_class={columnSpans[index % columnSpans.length]} // Cycles through predefined column spans
            />
          ))}
        </div>
      </section>

      {/* Contact form section */}
      <ContactForm homeContactData={contactData} />
    </div>
  );
};

export default Portfolio;
