import sanitizeHtml from "sanitize-html";
import Buttons from "../molecules/buttons";
import Divider from "../atoms/divider";

const HomeAbout = ({ homeAboutData }) => {
  console.log(homeAboutData);

  const cleanContent = sanitizeHtml(homeAboutData?.content || "", {
    allowedTags: ["strong", "em", "b", "i", "p", "a", "br"], // Allow only these tags
  });

  return (
    <>
      <section className="relative flex flex-col items-center">
        <Divider className="relative transform -scale-x-100 -scale-y-100 drop-shadow-[0_35px_35px_rgba(207,225,242,0.8)]" />
        <div className="w-full relative z-10 py-16 bg-background">
          <div className="container grid grid-cols-12">
            <h2
              className="col-span-12 md:col-span-7 md:text-h2 text-h2m capitalize !leading-[2.5rem] md:!leading-[4rem]"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            <div className="col-span-12 mt-6 md:mt-10">
              <Buttons
                buttons={homeAboutData?.buttons}
              />
            </div>
          </div>
        </div>
        <Divider className="relative drop-shadow-[0_35px_35px_rgba(207,225,242,0.8)]" />
      </section>
    </>
  );
};

export default HomeAbout;
