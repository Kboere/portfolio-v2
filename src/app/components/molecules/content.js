import H1 from './../atoms/heading/h1';


const Content = ({ title }) => (

    <section className="">
        <div className="flex flex-col gap-4">
            <H1 title={title} />
        </div>
    </section>
);

export default Content;