import P from "./../atoms/p";

const HomeAbout = ({ homeAboutData }) => {
  console.log(homeAboutData);

  return (
    <>
      <section className="relative h-screen bg-background">
        <div className="container">
          <P text={homeAboutData.content} />
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
