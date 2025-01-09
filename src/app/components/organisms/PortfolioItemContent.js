"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactForm from "../../components/organisms/contactForm";
import Divider from "../atoms/divider";
import H2 from "../atoms/heading/h2";
import Buttons from "../molecules/buttons";

gsap.registerPlugin(ScrollTrigger);

const PortfolioItemContent = ({ post, homeContactData }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imgRefs = useRef([]);

  const galleryPhotos = post.acf.gallery_photos; // ✅ Ensure we get images from API

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current || !containerRef.current || imgRefs.current.length < 3) return;

    // Title Scale Effect
    gsap.fromTo(
      titleRef.current,
      { scale: 1 },
      {
        scale: 5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 100%",
          end: "top -100%",
          scrub: 3,
        },
      }
    );

    // Image Scale Effect
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 100%",
          end: "top -100%",
          scrub: 1,
        },
      }
    );

    // Opacity Effect
    gsap.fromTo(
      [titleRef.current, imageRef.current],
      { opacity: 1 },
      {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -10%",
          end: "top -80%",
          scrub: 1,
        },
      }
    );

    // Grid Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Ensure images are loaded before animation
    Promise.all(
      imgRefs.current.map((img) => img?.complete)
    ).then(() => {
      // First image animation (scales down)
      tl.fromTo(
        imgRefs.current[0],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2 }
      )
        // Second image fade-in
        .fromTo(
          imgRefs.current[1],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2 },
          "+=0.5"
        )
        // Third image fade-in
        .fromTo(
          imgRefs.current[2],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2 },
          "+=0.5"
        );
    });
  }, []);

  if (!galleryPhotos || galleryPhotos.length < 3) {
    return <p>No images available</p>;
  }

  return (
    <div className="pt-16">
      <section
        ref={sectionRef}
        className="h-itemHero relative flex flex-col items-center justify-center p-8 pb-16 overflow-hidden"
      >
        <div className="relative w-full h-[80vh] flex flex-col justify-center md:justify-end items-center">
          <div className="absolute max-w-[1280px] w-full md:w-[80%] top-1/2 -translate-y-1/2">
            <Image
              src={post.acf.large_image}
              alt="Portfolio Image"
              width={400}
              height={200}
              placeholder="blur"
              blurDataURL="/images/dummy.png"
              className="rounded-lg md:rounded-[1rem] w-full h-full object-cover aspect-square md:aspect-video"
              ref={imageRef}
            />
            <h1
              ref={titleRef}
              className="text-[32px] md:text-[60px] text-center md:mt-0 md:mb-16 md:whitespace-nowrap text-stroke-border"
            >
              {post.title.rendered}
            </h1>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center">
        <Divider className="relative transform -scale-x-100 -scale-y-100 drop-shadow-[0_35px_35px_rgba(207,225,242,0.8)]" />
        <div className="w-full relative z-10 py-16 bg-background">
          <div className="container grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 ">
              <H2 
                title="Role" 
                className="relative flex justify-between items-center gap-4 overflow-hidden after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-secondary"
              />
              <p className="text-lg whitespace-break-spaces">{post.acf.omschrijving.role_item}</p>
              <Buttons buttons={post.acf.omschrijving.buttons} />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 ">
              <H2 
                title="Description" 
                className="relative flex justify-between items-center gap-4 overflow-hidden after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-secondary"
              />
              <p className="text-lg whitespace-break-spaces">{post.acf.omschrijving.desc_item}</p>
            </div>
          </div>
        </div>
        <Divider className="relative drop-shadow-[0_35px_35px_rgba(207,225,242,0.8)]" />
      </section>

      <section ref={containerRef} className="grid-container py-24 md:py-40">
        <div className="grid container grid-cols-12 gap-6">

          <div className="grid-item col-span-12">
            <Image
              src={galleryPhotos[0]}
              alt="Gallery Image 1"
              width={800}
              height={450}
              ref={(el) => (imgRefs.current[0] = el)}
              className="grid-image aspect-video w-full h-full rounded-lg object-cover"
            />
          </div>

          <div className="grid-item col-span-12 md:col-span-8">
            <Image
              src={galleryPhotos[1]}
              alt="Gallery Image 2"
              width={400}
              height={225}
              ref={(el) => (imgRefs.current[1] = el)}
              className="grid-image aspect-video w-full h-full rounded-lg object-cover"
            />
          </div>

          <div className="grid-item col-span-12 md:col-span-4">
            <Image
              src={galleryPhotos[2]}
              alt="Gallery Image 3"
              width={400}
              height={400}
              ref={(el) => (imgRefs.current[2] = el)}
              className="grid-image aspect-video md:aspect-square w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center">
          <div className="container grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 ">
              <H2 
                title="Fonts" 
                className="relative flex justify-between items-center gap-4 overflow-hidden after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-secondary"
              />
              <p className="text-lg whitespace-break-spaces">{post.acf.extra_info.font_item}</p>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 ">
              <H2 
                title="Technology" 
                className="relative flex justify-between items-center gap-4 overflow-hidden after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-secondary"
              />
              <p className="text-lg whitespace-break-spaces">{post.acf.extra_info.tech_item}</p>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 ">
              <H2 
                title="Colors" 
                className="relative flex justify-between items-center gap-4 overflow-hidden after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-secondary"
              />
              <p className="text-lg whitespace-break-spaces">{post.acf.extra_info.color_item}</p>
            </div>
          </div>
      </section>

      <ContactForm homeContactData={homeContactData} />
    </div>
  );
};

export default PortfolioItemContent;
