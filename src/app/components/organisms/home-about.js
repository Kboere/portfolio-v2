import sanitizeHtml from "sanitize-html";
import Buttons from "../molecules/buttons";

const HomeAbout = ({ homeAboutData }) => {
  console.log(homeAboutData);

  const cleanContent = sanitizeHtml(homeAboutData?.content || "", {
    allowedTags: ['strong', 'em', 'b', 'i', 'p', 'a', 'br'], // Allow only these tags
  });

  return (
    <>
      <section className="relative py-16 md:py-40 bg-background flex items-center">
        <div className="container grid grid-cols-12 ">
            <h2 className="col-span-12 md:col-span-7 md:text-h2 text-h2m capitalize !leading-[2.5rem] md:!leading-[4rem]"
            dangerouslySetInnerHTML={{ __html: cleanContent }} />

            <div className="col-span-12 mt-6 md:mt-10">
            <Buttons buttons={homeAboutData?.buttons} btn_style_1="btn-primary" />
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
