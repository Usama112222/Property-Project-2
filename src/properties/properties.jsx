import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure this is included
import pic1 from "../assets/prop1.webp";
import pic2 from "../assets/prop2.webp";
import pic3 from "../assets/prop3.webp";
import pic4 from "../assets/prop4.webp";
import pic5 from "../assets/prop5.webp";
import pic6 from "../assets/prop6.webp";

function Properties() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
    });
    AOS.refresh(); // Refresh to detect new content
  }, []);
    return(
 <div className="light bg-transparent">
        <section id="properties" className="lg:w-[90%]  m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 data-aos="zoom-in" className="text-red-500 dark:text-white aos-init aos-animate">
                      PROPERTIES
               </h1>
                <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold dark:text-white aos-init aos-animate">
                        Explore the latest
                        <br/>
                            properties available
                        
                </h1>
                <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init aos-animate">
                        <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${pic1})` }}>
                            <div id="top" className="flex justify-between items-end w-full">
                                <div>
                                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                        Featured
                                    </button>
                                </div>
                                <div className="flex justify-between items-center gap-3">
                                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                        Sales
                                    </button>
                                <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                        active
                                  </button>
                                </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            6Downtown, Las Vegas
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Villa with Amazing View
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 213.23
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            250 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Alice adams
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init aos-animate">
                            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${pic2})` }}>
                                <div id="top" className="flex justify-between items-end w-full">
                                    <div>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                            Featured
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            Sales
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            active
                                        </button>
                                    </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            Meadows Village, Las Vegas
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Townhouse for Sale
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 345.18
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            450 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Drew Alice
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init aos-animate">
                            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${pic3})` }}>
                                <div id="top" className="flex justify-between items-end w-full">
                                    <div>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                            Featured
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            Sales
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            active
                                        </button>
                                    </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            49 DC townhall alex
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Duplex sea facing for rent
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 652.18
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            129 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Fursi Bam
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init">
                            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"style={{ backgroundImage: `url(${pic4})` }}>
                                <div id="top" className="flex justify-between items-end w-full">
                                    <div>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                            Featured
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            Sales
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            active
                                        </button>
                                    </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            Underground street 20 texax
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Villa with Side View
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 876.13
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            453 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Neon Alice
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init">
                            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${pic5})` }}>
                                <div id="top" className="flex justify-between items-end w-full">
                                    <div>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                            Featured
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            Sales
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            active
                                        </button>
                                    </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            Rubari London Hills
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Awesome villa for rent
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 341.83
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            320 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Firari Alice
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 rounded-xl w-full aos-init">
                            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${pic6})` }}>
                                <div id="top" className="flex justify-between items-end w-full">
                                    <div>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">
                                            Featured
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            Sales
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                                            active
                                        </button>
                                    </div>
                                </div>
                                <div id="bottom" className="flex justify-between items-end w-full">
                                    <div className="flex justify-start items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <h1 className="text-white">
                                            Northean fersh alice
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                            </path>
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                <h1 className="text-xl text-black font-semibold dark:text-white">
                                    Street Farm for sale
                                </h1>
                                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                                    $ 675.23
                                </h1>
                                <p className="dark:text-white">
                                    Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood
                                </p>
                                <div id="icons" className="flex justify-center items-start gap-4">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            3
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            4
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            340 sq ft
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 mt-8">
                                </div>
                                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className=" size-5 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                                            </path>
                                        </svg>
                                        <h1 className="dark:text-white">
                                            Jordan Bram
                                        </h1>
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" size-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button data-aos="zoom-in" data-aos-delay="400" className="bg-red-600 text-md m-auto px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer aos-init">
                        LOAD MORE
                    </button>
            </div>
       </section>
    </div>
)}
            
            export default Properties
            