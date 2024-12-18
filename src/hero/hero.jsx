import React, { useEffect } from 'react';
import './hero.css';
import heroImage from '../assets/hero1.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
    });
    AOS.refresh(); // Ensure that AOS updates for dynamic content
  }, []);

  return (
    <div className="light bg-[#f3f3f3] bg-white">
      <section
        id="hero"
        className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
        >
          Find your next Home in Las Vegas
        </h1>
        <p
          data-aos="zoom-in"
          className="text-white text-xl lg:pr-[500px] pr-0"
        >
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </p>
      </section>

      <div className="light bg-transparent z-10">
        <div
          data-aos="zoom-in"
          id="form"
          className="light bg-white lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14"
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">LOCATION</h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black dark:text-white font-semibold">TYPE</h1>
            <select
              id="location"
              name="location"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled="">
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercial</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black dark:text-white font-semibold">CATEGORY</h1>
            <select
              id="category"
              name="category"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled="">
                Property Category
              </option>
              <option value="option1">Apartment</option>
              <option value="option2">Duplex</option>
              <option value="option3">Condos</option>
              <option value="option4">Houses</option>
              <option value="option5">Villas</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
