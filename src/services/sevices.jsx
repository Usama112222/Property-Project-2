import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS CSS

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Controls the duration of animations
      once: false, // Ensures animations happen once when the element comes into view
    });
  }, []);

  return (
    <div className="light bg-transparent pb-20">
      <section
        id="services"
        className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            className="text-red-500 dark:text-white"
          >
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Top real estate
            <br />
            services available
          </h1>

          <div
            id="service-box"
            className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
          >
            {/* Service Card 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM9.1 17H7v-2.14l5.96-5.96 2.12 2.12L9.1 17zm7.75-7.73-1.06 1.06-2.12-2.12 1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
                Sell your home
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                We sell your home at the best market price
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>

            {/* Service Card 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
                Home loans
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                We offer you free consultancy to get a loan
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>

            {/* Service Card 3 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.141-.043h-3.788a.75.75 0 0 1 0-1.5H11.625a.75.75 0 0 1 0 1.5h-3.79a.25.25 0 0 0-.141.043L5.91 4.4c-.291.197-.633.303-.984.303H2.75a.75.75 0 0 1 0-1.5h4.1a.246.246 0 0 0 .14-.043l1.697-1.154a.75.75 0 0 1 .985-.303H11.625a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 0 1.5h1.975V2.75z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
                Property management
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                Best property management services for all clients
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>

              {/* Service Card 1 */}
              <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM9.1 17H7v-2.14l5.96-5.96 2.12 2.12L9.1 17zm7.75-7.73-1.06 1.06-2.12-2.12 1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
                Evalution
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                We sell your home at the best market price
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>

            {/* Service Card 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
              Home inspection
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                We offer you free consultancy to get a loan
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>

            {/* Service Card 3 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.141-.043h-3.788a.75.75 0 0 1 0-1.5H11.625a.75.75 0 0 1 0 1.5h-3.79a.25.25 0 0 0-.141.043L5.91 4.4c-.291.197-.633.303-.984.303H2.75a.75.75 0 0 1 0-1.5h4.1a.246.246 0 0 0 .14-.043l1.697-1.154a.75.75 0 0 1 .985-.303H11.625a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 0 1.5h1.975V2.75z"></path>
                </svg>
              </div>
              <h1 className=" text-black text-[22px] font-semibold dark:text-white">
              Photoshoot
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
              We prepare your home visual presentation
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                READ MORE
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;




// function Services(){
//     return(
        

//         <div className="light bg-transparent pb-20">
//             <section id="services" className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10">
//                 <div className="flex flex-col justify-center items-start gap-4">
//                     <h1 data-aos="zoom-in" className="text-red-500 dark:text-white aos-init aos-animate">
//                         OUR SERVICES
//                     </h1>
//                     <h1 data-aos="zoom-in" className="text-black text-[40px] font-semibold leading-10 dark:text-white aos-init aos-animate">
//                         Top real estate
//                         <br/>
//                             services available
                        
//                     </h1>
//                     <div id="service-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path fill="none" d="M0 0h24v24H0V0z">
//                                     </path>
//                                     <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM9.1 17H7v-2.14l5.96-5.96 2.12 2.12L9.1 17zm7.75-7.73-1.06 1.06-2.12-2.12 1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Sell your home
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 We sell your home at the best market price
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Home loans
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 We offer you free consultancy to get a loan
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.249.249 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6.077 6.077 0 0 1-.792.433 6.924 6.924 0 0 1-2.876.62 6.913 6.913 0 0 1-2.876-.62 6.077 6.077 0 0 1-.792-.433 3.483 3.483 0 0 1-.309-.221.762.762 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102c.05 0 .099-.015.141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0ZM2.193 15.198a5.414 5.414 0 0 0 2.557.635 5.414 5.414 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.847 5.847 0 0 0 2.547-.576L19.25 9.367Z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Legal services
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 Expert legal help for all related property items
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Home inspection
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 We make sure you get what you were promised
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Evaluation
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 We offer you free evaluation to get a mortgage loan
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                         <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate">
//                             <div className="p-6 rounded-full bg-red-200">
//                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <h1 className=" text-black text-[22px] font-semibold dark:text-white">
//                                 Photoshoot
//                             </h1>
//                             <p className="text-lg text-slate-700 dark:text-white">
//                                 We prepare your home visual presentation
//                             </p>
//                             <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
//                                 READ MORE
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )}
            
            
// export default Services
            