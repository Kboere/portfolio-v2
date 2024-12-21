import sanitizeHtml from "sanitize-html";

const HomeAbout = ({ homeAboutData }) => {
  console.log(homeAboutData);

  const cleanContent = sanitizeHtml(homeAboutData?.content || "", {
    allowedTags: ['strong', 'em', 'b', 'i', 'p', 'a', 'br'], // Allow only these tags
  });

  return (
    <>
      <section className="relative h-screen bg-background flex items-center">
        <div className="container grid grid-cols-12 ">
            <h2 className="col-span-12 md:col-span-7 md:text-h2 text-h2m capitalize"
            dangerouslySetInnerHTML={{ __html: cleanContent }} />
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
