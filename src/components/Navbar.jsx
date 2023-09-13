import React from "react";
import Logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = ({ searchMovie, search, setSearch }) => {
  return (
    <div className="relative w-full top-0 left-0 text-white z-50 lg:px-6">
      <div className="container-fluid xs:container flex justify-between mx-auto items-center">
        <NavLink to="/" className="py-2 xs:space-x-4 flex items-center text-lg">
          <img src={Logo} alt="" className="w-16" />
          <span>moView</span>
        </NavLink>

        <form
          onSubmit={searchMovie}
          className="w-2/5 items-center hidden md:flex"
        >
          <input
            type="text"
            className="px-4 py-2 border border-white rounded-lg bg-transparent placeholder:text-white w-full focus:outline-none focus:border-primary"
            placeholder="what do you want to watch"
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            value={search}
          />
          <button className="text-2xl -ml-10 hover:text-primary">
            <BsSearch />
          </button>
        </form>

        <div className="space-x-5 flex items-center">
          <NavLink className={"font-semibold"} to="/signin">
            Sign in
          </NavLink>
          <button className="bg-primary px-2 py-2 rounded-full text-2xl">
            <HiMenuAlt4 />
          </button>
        </div>
      </div>

      <div className="flex justify-center xs:mt-4 md:hidden">
        <form  onSubmit={searchMovie} className="w-full items-center relative xs:container mx-auto flex sm:w-4/6 md:w-3/6">
          <input
            type="text"
            className="px-4 py-2 border border-white rounded-lg bg-transparent placeholder:text-white w-full focus:outline-none focus:border-primary"
            placeholder="what do you want to watch"
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            value={search}
          />
          <button className="text-2xl absolute top-2 right-4 h-6 hover:text-primary">
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
