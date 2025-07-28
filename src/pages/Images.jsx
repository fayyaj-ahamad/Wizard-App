import { useGSAP } from "@gsap/react";
import amazone from "../assets/images/amazon.png";
import dribble from "../assets/images/dribble.png";
import hubspot from "../assets/images/hubspot.png";
import netflix from "../assets/images/netflix.png";
import notion from "../assets/images/notion.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const imgArr = [dribble, hubspot, netflix, notion, amazone];
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".img-container img", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        end: "bottom 60%",
        scrub:2
      },
      y: 100,
      opacity: 0,
      stagger: 0.18,
      duration: 0.6,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="img-container w-full flex flex-wrap justify-center gap-6 md:justify-evenly items-center py-8"
    >
      {imgArr.map((img, index) => (
        <div
          key={index}
          className="img flex justify-center items-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
        >
          <img
            src={img}
            alt={`img-${index}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
