

"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
  
const About =()=>{useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
    return(
        <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage:"url('images/imageabout.jpeg')"}}>
            <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
                <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
                <p>Welcome to Your favourite Coffee shop for You Tasty and Refreshing Coffee.</p>
            </div>
        </section>
    )
};

export default About;