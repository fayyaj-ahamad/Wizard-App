import React, { useState } from "react";
import  {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  useGSAP(()=>{
    gsap.from("nav, nav li, nav menu-btn",{
    y:-40,
    opacity: 0,
    duration: 0.6,
    delay:0.5,
    stagger: 0.18
    })
  })
  return (
    <>
      <nav className="w-full font-poppins text-slate-900 px-6 md:px-[100px] py-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="logo cursor-pointer flex items-center gap-2 text-3xl font-bold">
          <h1 className="text-black font-ubuntu">
            <i className="ri-shining-2-fill -rotate-45 transform inline-block text-4xl text-indigo-900"></i>
            WizardZ
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="menu ms-20 hidden md:flex items-center gap-10" >
          <ul className="nav-links flex gap-6 text-[18px] font-bold cursor-pointer">
            <li>
              <span className="inline-block pb-[2px] hover:border-b-2 hover:border-black transition-all">Home</span>
            </li>
            <li>
              <span className="inline-block pb-[2px] hover:border-b-2 hover:border-black transition-all">Service</span>
            </li>
            <li>
              <span className="inline-block pb-[2px] hover:border-b-2 hover:border-black transition-all">Block</span>
            </li>
            <li>
              <span className="inline-block pb-[2px] hover:border-b-2 hover:border-black transition-all">Use Cases</span>
            </li>
          </ul>
          <button className="menu-btn bg-black border-2 py-2 px-6 font-semibold text-white rounded-md hover:bg-white hover:text-black hover:border-black transition-all ease-out" >
            Request A Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <i
          className={
            isOpen
              ? "ri-close-fill text-3xl cursor-pointer md:hidden"
              : "ri-menu-5-line text-3xl cursor-pointer md:hidden"
          }
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-slate-100 shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-10">
            <ul className="flex flex-col items-center gap-4 text-lg font-semibold">
              <li className="hover:border-b-2 hover:border-black">Home</li>
              <li className="hover:border-b-2 hover:border-black">Service</li>
              <li className="hover:border-b-2 hover:border-black">Block</li>
              <li className="hover:border-b-2 hover:border-black">Use Cases</li>
            </ul>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border hover:border-black transition">
              Request A Quote
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;


