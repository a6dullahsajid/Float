import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#shop",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Float
            </a>
            <div className="hidden md:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((menu, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="px-4 font-semibold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200"
                        href={menu.link}
                      >
                        {menu.name}
                      </a>
                    </li>
                  );
                })}
                {/* Dropdown */}
                <li className="relative cursor-pointer  text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white group px-2 flex items-center gap-1">
                  <a href="#" className="font-semibold duration-200">
                    Quick Links
                  </a>
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>

                  {/* Dropdown Links  */}
                  <div className="hidden group-hover:block w-[180px] absolute z-[999] top-7 shadow-sm shadow-gray-700 rounded-lg dark:bg-gray-900">
                    <ul className="space-y-2 p-2">
                      {DropdownLinks.map((links, index) => {
                        return <li key={links.id}>
                          <a className="font-semibold rounded-md p-2 hover:bg-primary/20 inline-block w-full text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200" href={links.link}>{links.name}</a>
                        </li>;
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-between items-center gap-4">
            {/* Search bar section */}
            <div className="relative group hidden sm:flex items-center">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 group-hover:text-pretty group-hover:text-primary absolute right-1 duration-300" />
            </div>
            {/* Cart button */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 hover:text-primary duration-300" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-1 right-1 flex items-center justify-center text-xs">
                5
              </div>
            </button>
            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
Navbar;
