"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <section
      className="hero h-screen flex items-center bg-cover bg-center h-100 w-100"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">
          Welcome to our coffee shop
        </h1>
        <p className="text-6xl font-semibold	font-weight: 400; mt-4  text-yellow-900">
          Greate Cofee for Some Joy
        </p>
        <button className="mt-6 px-8 py-4  bg-yellow-950 bg-blue hover:bg-blue-700 rounded-md font-bold border-sky-200">
          Shop Now
        </button>
      </div>
    </section>
  );
};
export default HomeContent;
