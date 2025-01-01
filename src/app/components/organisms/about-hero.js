import Slider from "../molecules/slider";
import H1 from "./../atoms/heading/h1";
import P from "./../atoms/p";

const AboutHero = ({ aboutData }) => {
    const skills_sectie = aboutData.skills_sectie;

  return (
      <section className="grid md:grid-cols-12 gap-20 md:gap-20 h-screen items-center">
        <div className="col-span-12 md:col-span-6">
        <img
              className="h-full object-contain"
              src={aboutData.afbeelding.url}
              alt={aboutData.afbeelding.alt}
            />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6">
            <div className="w-full p-6 backdrop-filter backdrop-blur bg-opacity-30 bg-white shadow-md rounded-md flex flex-col gap-4 md:gap-6">
                {/* slider */}
                <H1 title={skills_sectie.titel} className="!text-h3 !text-h3m !tracking-normal uppercase"/>
                <P text={skills_sectie.content} />

                <div className="w-full">
                <Slider slides={skills_sectie.skills_slider} />
                </div>

            </div>
            <div>
                test
                {/* buttons */}
            </div>
        </div>
    </section>
  );
};

export default AboutHero;
