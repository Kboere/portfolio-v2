import H1 from "./../atoms/heading/h1";
import H3 from "./../atoms/heading/h3";
import H4 from "./../atoms/heading/h4";
import P from "./../atoms/p";

const HomeHero = ({ homeData }) => {
//   console.log(homeData);

  return (
    <>
      <div className="relative grid grid-cols-12 py-6 md:py-16 h-screen">
        <section className="container grid grid-cols-12 col-span-12 relative z-10">
          <div className="col-span-8">
            <H1 title={homeData.titel} />
          </div>

          <div className="grid grid-cols-12 col-span-12 justify-between">
            <div className="col-span-6 flex flex-col justify-end gap-4">
              <H4 title={homeData.titel_unlocking_skills} />

              {homeData.unlocking_skills &&
                homeData.unlocking_skills.length > 0 && (
                  <ul>
                    {homeData.unlocking_skills.map((item, index) => (
                      <li
                        key={index}
                        className="list-disc ml-3 md:ml-6 font-body text-lg tracking-tight"
                      >
                        {item.titel}
                      </li>
                    ))}
                  </ul>
                )}
            </div>

            <div className="hidden md:flex md:flex-col md:col-span-2 md:col-start-11 items-end justify-end text-end">
              <H3 title={homeData.naam_autheur} className="font-bold" />
              <P text={homeData.subtitel_autheur} />
            </div>
          </div>
        </section>
        <section className="absolute right-0 bottom-0 h-[80vh]">
            <img
              className="h-full"
              src={homeData.afbeelding.url}
              alt={homeData.afbeelding.alt}
            />
          </section>
      </div>
    </>
  );
};

export default HomeHero;