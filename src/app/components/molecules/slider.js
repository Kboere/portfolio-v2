'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import H5 from '../atoms/heading/h5';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Use the Swiper modules
      spaceBetween={50} // Space between slides
      slidesPerView={1} // Number of slides to show at once
      pagination={{ clickable: true }} // Enable pagination with clickable dots
      autoplay={{ delay: 30000 }} // Set autoplay delay to 3 seconds
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* Check if "afbeeldingen" is true */}
          {slide.slide.afbeeldingen ? (
            // Render content when afbeeldingen is true
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
            <div className="h-64 flex items-center justify-center bg-gray-200">
              <p className="absolute text-white font-bold text-lg">{slide.slide.soft_skills.titel}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: slide.slide.soft_skills.soft_skilss,
                }}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
