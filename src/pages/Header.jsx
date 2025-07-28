import HeaderImg from "../assets/images/piano.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Header = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const paraRef = useRef();
  const buttonRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
    });

    tl.from(paraRef.current, {
      opacity: 0,
      x: -80,
      duration: 1,
    });

    tl.from(buttonRef.current, {
      opacity: 0,
      x: -60,
      duration: 1,
    });

    tl.from(imgRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.2,
    }, "-=0.8");
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="header-page w-full font-poppins px-4 sm:px-6 md:px-16 lg:px-32 flex flex-col-reverse md:flex-row items-center md:items-start"
    >
      {/* Left Section */}
      <div className="left w-full md:w-1/2 h-auto py-8 md:py-20 text-center md:text-left">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Navigating<br /> the digital <br />landscape for<br /> success.
        </h1>
        <p
          ref={paraRef}
          className="mt-4 sm:mt-5 md:mt-7 font-normal text-sm sm:text-base md:text-lg"
        >
          WizardZ is a modern digital solutions hub, built to empower businesses and creators with cutting-edge tools, seamless automation, and magical user experiences.
        </p>

        <button
          ref={buttonRef}
          className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg rounded mt-5 sm:mt-6 md:mt-7 w-full sm:w-auto"
        >
          Book A Consultation
        </button>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img
          ref={imgRef}
          src={HeaderImg}
          alt="Header IMG"
          className="w-[90%] sm:w-[75%] md:w-[90%] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] object-contain max-h-[500px] mt-3"
        />
      </div>
    </div>
  );
};

export default Header;
