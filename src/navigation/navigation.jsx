import './navigation.css'
import logo from "../assets/logo.png"


 function Navigation(){
    return (
        <nav className="light bg-[#f3f3f3] flex justify-between items-center gap-4 bg- lg:px-20 px-4 py-3 sticky top-0 z-30">

            <div id="logo">
                <img src={logo} alt="" className="lg:w-[150px] w-[120px] dark:invert"/>
            </div>

           <ul className="lg:flex justify-center items-center gap-8 hidden">
               <a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">
                  Home
               </a>
               <a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">
                  About
                </a>
                <a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">
                 Properties
                </a>
                <a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">
                 Services
                </a>
                <a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">Testimonials</a><a className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white">
                 Contact
                </a>
            </ul>

            <div className="flex justify-center items-center lg:hidden">
                <div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-black dark:text-white text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                    </svg>
                </div>
            </div>

            <div className="hidden w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0">
                <ul className="flex flex-col justify-center items-center gap-2 w-full">
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">Home</a>
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">About</a>
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">Properties</a>
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">Services</a>
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">Testimonials</a>
                    <a className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center">Contact</a>
                </ul>
            </div>

            <div className="flex justify-center items-center lg:gap-8 gap-2">
                <div className="flex justify-center items-center lg:gap-3 gap-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>

                    <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">888-908-9102</h1>

                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="size-6 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
            </div>

        </nav>
)}
        
export default Navigation
        