"use client"; // Mark as Client Component

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactForm from "../../components/organisms/contactForm";

gsap.registerPlugin(ScrollTrigger);

const PortfolioItemContent = ({ post, homeContactData }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  // make a function were it duplacates the text
  // const duplicateText = () => {
  //   const textContainer = document.getElementById("duplicate-text");
  //   if (textContainer) {
  //     const textContent = textContainer.textContent; // Get the original text
  //     textContainer.innerHTML = ""; // Clear the original text

  //     // Create one span and append the text 3 times with periods
  //     const span = document.createElement("span");
  //     // Repeat the text 3 times with a period after each
  //     span.textContent = (textContent + ".").repeat(2).slice(0, -1); // Slice to remove the last period
  //     textContainer.appendChild(span);
  //   }
  // };


  useEffect(() => {
    if (!titleRef.current || !sectionRef.current) return;

    // duplicateText();
  
    // Scale Effect
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

    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 100%",
          end: "top -100%",
          scrub: 3,
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
          start: "top -30%", 
          end: "top -50%", 
          scrub: 1,
        },
      }
    );
  }, []);
  
  

  return (
    <div className="p-8 pb-16 overflow-hidden">
      <section ref={sectionRef} className="h-itemHero relative flex flex-col items-center justify-center md:justify-end mb-32">
      <div className="absolute max-w-[1280px] w-full md:w-[90%] top-1/2 top-1/2 -translate-y-1/2" ref={imageRef}>
          <Image
            src={post.acf.large_image}
            alt="Portfolio Image"
            width={400}
            height={200}
            placeholder="blur"
            blurDataURL="/images/dummy.png"
            className="rounded-lg md:rounded-[1rem] w-full h-full object-cover"
          />
      </div>
        <h1 id="duplicate-text" ref={titleRef} className="text-[32px] md:text-[60px] text-center mt-[66.666%] md:mt-0 md:mb-8 md:whitespace-nowrap">
          {post.title.rendered}
        </h1>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
        <section>
          <p className="text-md font-semibold mb-1">Description</p>
          <p className="text-lg mb-8">{post.acf.desc_item}</p>
        </section>
      </div>

      <ContactForm homeContactData={homeContactData} />
    </div>
  );
};

export default PortfolioItemContent;
