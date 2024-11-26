import { useEffect } from 'react';
import pic2 from "../assets/client2.png";
import pic3 from "../assets/client3.png";
import pic4 from "../assets/client4.png";
import pic5 from "../assets/client5.png";
import pic6 from "../assets/client6.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic1 from "../assets/client1.png";

function Testmonial() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Set animation duration (optional)
            once: false, // Animation happens only once
        });
    }, []);

    return (
        <div className="light bg-transparent">
            <section id="testimonials" className="light bg-transparent lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20">
                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">OUR CLIENTS</h1>
                    <h1 data-aos="zoom-in" className="text-black dark:text-white text-[40px] font-semibold leading-10">What are our clients <br />saying about us</h1>
                </div>

                <div id="clients-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic1} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Dana Gilmore</h1>
                                <h1 className="text-slate-600 dark:text-white">Excellent team!</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            
                            {/* Repeat other star SVGs */}
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic2} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Ana Anderson</h1>
                                <h1 className="text-slate-600 dark:text-white">Very good work</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            {/* Repeat other star SVGs */}
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic3} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Dana Gilmore</h1>
                                <h1 className="text-slate-600 dark:text-white">Excellent team!</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            {/* Repeat other star SVGs */}
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic4} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Dana Gilmore</h1>
                                <h1 className="text-slate-600 dark:text-white">Excellent team!</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            {/* Repeat other star SVGs */}
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic5} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Dana Gilmore</h1>
                                <h1 className="text-slate-600 dark:text-white">Excellent team!</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>



                            {/* Repeat other star SVGs */}
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
                        <div className="flex justify-start items-center w-full gap-4">
                            <img src={pic6} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300" />
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1 className="text-xl text-black font-semibold dark:text-white">Dana Gilmore</h1>
                                <h1 className="text-slate-600 dark:text-white">Excellent team!</h1>
                            </div>
                        </div>
                        <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                        <div className="flex justify-start items-start gap-2 w-full">
                            {/* Star Icons */}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            {/* Repeat other star SVGs */}
                        </div>
                    </div>
                </div>

                
            </section>
        </div>
    );
}

export default Testmonial;

