import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }, footerRef);
  }, []);

  return (
    <div
      ref={footerRef}
      className="footer-section w-[90%] max-w-[1200px] mx-auto bg-black rounded-tl-3xl rounded-tr-3xl px-6 py-10 mt-16"
    >
      <div className="footer flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Brand Section */}
        <div className="footer-item md:w-1/3 border-b md:border-b-0 md:border-r border-white pr-6">
          <h2 className="text-white text-2xl font-semibold mb-4 font-poppins">WizardZ</h2>
          <p className="text-white font-poppins">
            WizardZ is a modern digital agency helping brands thrive in the online world. We specialize in crafting
            unique, responsive websites that drive results.
          </p>
          <p className="text-bgcolor mt-4 inline-block cursor-pointer font-poppins">
            Learn More <i className="ri-arrow-right-up-line"></i>
          </p>
        </div>

        {/* Service Section */}
        <div className="footer-item font-poppins md:w-1/3 border-b md:border-b-0 md:border-r border-white pr-6">
          <h3 className="text-white text-xl font-medium mb-3">Services</h3>
          <p className="text-white">
            We provide high-quality design, branding, UI/UX, and full-stack development solutions tailored to your
            business.
          </p>
          <p className="text-bgcolor mt-4 inline-block cursor-pointer">
            Learn More <i className="ri-arrow-right-up-line"></i>
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-item md:w-1/3 font-poppins">
          <h3 className="text-white text-xl font-medium mb-3">Contact Us</h3>
          <p className="text-white">
            Feel free to reach out for collaborations or just a friendly hello! We’re always open to discuss new
            projects.
          </p>
          <p className="text-bgcolor mt-4 inline-block cursor-pointer">
            Learn More <i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
