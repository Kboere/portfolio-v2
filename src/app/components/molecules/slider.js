'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import H5 from '../atoms/heading/h5';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50} 
      slidesPerView={1} 
      pagination={{ 
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className} custom-pagination-dot"></span>`;
          },
         }}
      autoplay={{ delay: 30000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* Check if "afbeeldingen" is true */}
          {slide.slide.afbeeldingen ? (
            <div className="relative flex flex-col gap-4">

              <H5 title={slide.slide.titel_hard_skills} className="font-bold uppercase" />

                <div>
              {slide.slide.hard_skils &&
                slide.slide.hard_skils.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col gap-2 mb-4">
                    <h3 className="text-white">{skill.titel}</h3>
                    <div className="flex space-x-4">
                      {skill.afbeeldingen_skilss.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image.afbeelding}
                          alt={skill.titel}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                ))}
                </div>
            </div>
          ) : (
            // Render content when afbeeldingen is false
            <div className="flex flex-col gap-4">
                <H5 title={slide.slide.soft_skills.titel} className="font-bold uppercase" />
              
              <div
                dangerouslySetInnerHTML={{
                  __html: slide.slide.soft_skills.soft_skilss,
                }}

                className='uppercase [&_ul]:space-y-1'
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
