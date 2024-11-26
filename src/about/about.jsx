import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimage from '../assets/about1.jpg';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
    });
    AOS.refresh(); // Refresh AOS for dynamic content
  }, []);

  return (
    <section
      id="about"
      className="light bg-[#f3f3f3] bg-transparent w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimage}
          alt="About Us"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white"
        >
          We help clients buy and sell houses since 1989
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-xl text-gray-600 dark:text-white text-justify"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
          eaque inventore voluptatum rem consectetur quae magni optio quis
          incidunt?
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-transform duration-300"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
}

export default About;
