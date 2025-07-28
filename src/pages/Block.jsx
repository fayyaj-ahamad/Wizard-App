import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import robo from "../assets/images/robo.png";

gsap.registerPlugin(ScrollTrigger);

const Block = () => {
  const blockRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.from(".left-side", {
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Right image animation
      gsap.from(".right-side", {
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, blockRef);
  }, []);

  return (
    <div
      ref={blockRef}
      className="block-section font-poppins py-6 px-4 sm:px-6 md:px-10 lg:px-[125px]"
    >
      <div className="block_items flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="left-side w-full lg:w-2/3">
          <div className="heading">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Let's make things happen
            </h1>
          </div>
          <div className="paragraph mt-4">
            <p className="font-medium text-sm sm:text-base leading-relaxed max-w-[100%] sm:max-w-[90%] md:max-w-[600px]">
              At <strong>WizardZ</strong>, we believe that every idea, no matter how small, has the potential to create a big impact.
              We're not just another digital agency — we're your creative partner, your growth strategist, and your problem solver.
              We bring design, strategy, and technology together to help your brand thrive in the digital world.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border hover:border-black transition mt-8">
              Get Your Free Proposal
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="img w-[180px] sm:w-[220px] md:w-[250px] h-auto">
            <img src={robo} alt="robo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
