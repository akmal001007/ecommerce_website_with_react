import React from 'react'
import logo from '../../assets/Designer.png'
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white 
    duration-200 relative z-40"
    >
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div className="">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="" className="w-10" />
              AFGHAN GEMS
            </a>
          </div>
          {/* search bar */}

          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <MdSearch className="text-gray-500 group-hover:text-primary absolute
              top-1/2 right-3 -translate-y-1/2" />
            </div>
          </div>
          {/* order button  */}

          <button onClick={() => alert("no order")}
          className='bg-primary transition-all
          duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group'>
            <span>order</span>
          </button>
        </div>
      </div>

      {/* lower navbaer  */}
      <div></div>
    </div>
  );
}

export default Navbar