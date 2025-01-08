"use client"; // Mark as Client Component

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactForm from "../../components/organisms/contactForm";

gsap.registerPlugin(ScrollTrigger);

const imageStyle = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

const PortfolioItemContent = ({ post, homeContactData }) => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current) return;
  
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
  
    // Opacity Effect
    gsap.fromTo(
      titleRef.current,
      { opacity: 1 },
      {
        opacity: 0, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -20%", 
          end: "top -50%", 
          scrub: 1,
        },
      }
    );
  }, []);
  
  

  return (
    <div className="p-8 pb-16 overflow-hidden">
      <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center">
        <h1 ref={titleRef} className="text-[90px] font-bold text-center mb-8">
          {post.title.rendered}
        </h1>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
        <section>
          <Image
            src={post.acf.large_image}
            alt="Portfolio Image"
            width={400}
            height={200}
            style={imageStyle}
            placeholder="blur"
            blurDataURL="/images/dummy.png"
          />
        </section>
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
