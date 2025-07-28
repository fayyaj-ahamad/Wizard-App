import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const serviceRef = useRef();

  useGSAP(() => {
    gsap.from(".service h2", {
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.from(".service p", {
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={serviceRef}
      className="service w-full font-poppins flex flex-col lg:flex-row items-start lg:items-center gap-6 px-4 sm:px-6 md:px-10 lg:px-[120px] py-10"
    >
      {/* Heading */}
      <div className="heading">
        <h2 className="bg-bgcolor inline-block font-semibold px-4 text-2xl sm:text-3xl lg:text-4xl">
          Services
        </h2>
      </div>

      {/* Paragraph */}
      <div className="paragraph leading-snug font-medium lg:px-[100px] text-sm sm:text-base">
        <p>
          Your brand is your story. We help you build a powerful and consistent identity through logo design, <br className="hidden lg:block" />
          typography, and brand guidelines that leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default Service;
