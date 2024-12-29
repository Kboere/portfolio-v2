import Image from "next/image";
import TransitionLink from "../transitionLink";

const imageStyle = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  zIndex: "1",
  position: "relative",
};

const Card = ({ title, description, thumbnail, btnLabel, slug, extra_class = '' }) => (

        <div className={`bg-white shadow-lg rounded-lg [&_*]:rounded-lg relative w-card col-span-4 h-250px md:h-[300px] ${extra_class}`}>
          <div className="block w-full h-full absolute bg-secondary top-0 left-4 rounded-lg"></div>
            <Image
                src={thumbnail}
                alt={title || 'Card Thumbnail'}
                width={400}
                height={200}
                placeholder="blur"
                style={imageStyle}
                blurDataURL="/images/dummy.png"
            />
            <span className='flex items-end p-4 inset-0 absolute text-primary bg-gradient-to-t from-secondary via-50% to-transparent z-10'>
                <TransitionLink 
                    href={`/portfolio/${slug}`} 
                    className={`flex justify-center items-center gap-3 font-body text-h3m md:text-h3 font-semibold`}
                    label={btnLabel} 
                    icon="arrow_forward"
                />
            </span>
        </div>
);

export default Card;