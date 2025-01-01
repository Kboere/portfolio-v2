import { reqUrlAcf } from '../config';
import ContactForm from '../components/organisms/contactForm';
import HeroAbout from '../components/organisms/about-hero';

export const metadata = {
  title: 'Kevin Boere | About me',
};

const About = async () => {
  // Fetch ACF options (contact form and other data)
  let contactData = null;
  let aboutData = null;
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
    aboutData = data.acf?.hero_sectie || null;

  } catch (error) {
    console.error('Error fetching ACF options:', error);
  }

  return (
    <div className="container mx-auto p-8 pb-16">
      <HeroAbout aboutData={aboutData} />
      <ContactForm homeContactData={contactData} />
    </div>
  );
};

export default About;
