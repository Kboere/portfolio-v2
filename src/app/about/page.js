import { reqUrl, reqUrlAcf } from '../config';
import Card from '../components/organisms/card';
import ContactForm from '../components/organisms/contactForm';
import H1 from '../components/atoms/heading/h1';
import P from '../components/atoms/p';
import Filtering from '../components/molecules/filtering';

export const metadata = {
  title: 'Kevin Boere | About me',
};

const About = async () => {
  // Fetch ACF options (contact form and other data)
  let contactData = null;
  let archiveData = null;
  try {
    const res = await fetch(`${reqUrlAcf}/options/options?timestamp=${new Date().getTime()}`, {
      headers: {
        cache: 'no-store',
        Pragma: 'no-cache',
        Expires: '0',
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

  return (
    <div className="container mx-auto p-8 pb-16">
      <section className="grid grid-cols-12">
        <H1 title="About me" className="col-span-12 text-mdisplay md:text-display uppercase font-bold text-center mb-8" />
        <P text={archiveData?.archive_desc} className="col-span-12 md:col-span-8 md:col-start-3 text-lg text-center mb-8" />

        
      </section>

      <ContactForm homeContactData={contactData} />
    </div>
  );
};

export default About;
