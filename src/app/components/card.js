import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, thumbnail, btnLabel, slug }) => (
   <Link href={`/portfolio/${slug}`} className='bg-white shadow-lg rounded-lg overflow-hidden relative'>
              <Image
                src={thumbnail}
                alt='Placeholder'
                width={400}
                height={200}
                placeholder="blur"
                blurDataURL="/images/dummy.png"
                className="object-cover w-full h-full"
              />
              <span className='p-4 absolute text-white card-overlay'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-lg'>{description}</p>
                <button href={`/portfolio/${slug}`}>{btnLabel}</button>
              </span>
    </Link>
);

export default Card;