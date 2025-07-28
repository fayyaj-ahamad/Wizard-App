import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

import piano from "../assets/images/piano.png";
import arr from "../assets/images/arr.png";
import guy from "../assets/images/guy.png";
import Carts from "../components/Carts";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const cardRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".cart-item");

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
        x: index % 2 === 0 ? -100 : 100, // even: left, odd: right
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="box w-full font-poppins px-4 sm:px-6 md:px-10 lg:px-[120px] py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div className="cart-item">
        <Carts imgs={piano} heading={<>Search <br /> engine <br /> optimization</>} />
      </div>
      <div className="cart-item">
        <Carts imgs={arr} heading={<>Pay per <br /> click <br /> advertising</>} />
      </div>
      <div className="cart-item">
        <Carts imgs={guy} heading={<>Social <br /> media <br /> marketing</>} />
      </div>
      <div className="cart-item">
        <Carts imgs={piano} heading={<>Email <br /> marketing</>} />
      </div>
    </div>
  );
};

export default Card;
