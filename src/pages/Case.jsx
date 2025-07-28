import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Case = () => {
  const caseRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading from left
      gsap.from(".case-heading", {
        scrollTrigger: {
          trigger: caseRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animate paragraph from right
      gsap.from(".case-paragraph", {
        scrollTrigger: {
          trigger: caseRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, caseRef);
  }, []);

  return (
    <div
      ref={caseRef}
      className="case-section font-poppins w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 px-4 sm:px-6 md:px-10 lg:px-[120px] py-10"
    >
      {/* Heading */}
      <div className="case-heading heading w-full lg:w-auto">
        <h2 className="bg-bgcolor text-xl sm:text-2xl md:text-3xl font-semibold px-3 sm:px-4 py-1 rounded">
          Case Study
        </h2>
      </div>

      {/* Paragraph */}
      <div className="case-paragraph paragraph w-full lg:flex-1 leading-snug font-medium text-sm sm:text-base md:text-lg text-gray-700">
        <p>
          Your brand is your story. We help you build a powerful and consistent identity through logo design,
          <br className="hidden lg:block" />
          typography, and brand guidelines that leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default Case;
