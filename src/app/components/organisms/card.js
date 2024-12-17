// "use client";

import Image from "next/image";
import TransitionLink from "../transitionLink";
import Link from "next/link";

const imageStyle = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

const Card = ({ title, description, thumbnail, btnLabel, slug, extra_class = '' }) => (

        <div className={`bg-white shadow-lg rounded-lg overflow-hidden relative col-span-4 ${extra_class}`}>
            <Image
                src={thumbnail}
                alt={title || 'Card Thumbnail'}
                width={400}
                height={200}
                placeholder="blur"
                style={imageStyle}
                blurDataURL="/images/dummy.png"
            />
            <span className='flex items-end p-4 inset-0 absolute text-white bg-gradient-to-t from-black via-30% to-transparent'>
                <TransitionLink 
                    href={`/portfolio/${slug}`} 
                    className={`flex justify-center items-center gap-3`}
                    label={btnLabel} 
                    icon="arrow_forward"
                />
            </span>
        </div>
);

export default Card;