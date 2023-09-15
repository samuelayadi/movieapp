import React from "react";
import { useState } from "react";
import Logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { TfiVideoCamera } from "react-icons/tfi";
import { PiNewspaper, PiTelevisionSimple } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from 'react-icons/ai'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <aside
        className={`fixed w-56 ${
          isSidebarOpen ? "block" : "hidden"
        } h-screen z-50 md:block `}
      >
        <div className="w-56 fixed border-e border-grey3 top-0 left-0 h-screen rounded-e-2xl bg-white items-center flex flex-col justify-between">
          <NavLink
            to="/"
            className="py-2 xs:space-x-4 flex justify-center items-center text-lg"
          >
            <img src={Logo} alt="" className="w-14" />
            <span className="font-semibold">moView</span>
          </NavLink>

          <div className="flex flex-col items-center space-y-4 text-[#666666] justify-center w-full">
            <NavLink
              to="/"
              className="pl-14 flex items-center font-semibold space-x-4 py-6 w-full"
            >
              <span className="text-2xl">
                <GoHome />{" "}
              </span>
              <p>Home</p>
            </NavLink>

            <NavLink
              to="/movie"
              className="pl-14 flex items-center font-semibold space-x-4 py-6 w-full text-primary border-e-4 border-primary bg-secondary"
            >
              <span className="text-2xl text-black">
                <TfiVideoCamera />{" "}
              </span>
              <p>Movies</p>
            </NavLink>

            <NavLink
              to=""
              className="pl-14 flex items-center font-semibold space-x-4 py-6 w-full"
            >
              <span className="text-2xl">
                <PiTelevisionSimple />{" "}
              </span>
              <p>TV Series</p>
            </NavLink>

            <NavLink
              to=""
              className="pl-14 flex items-center font-semibold space-x-4 py-6 w-full"
            >
              <span className="text-2xl">
                <PiNewspaper />{" "}
              </span>
              <p>Upcoming</p>
            </NavLink>
          </div>

          <div className=" text-[#666666] ">
            <button className="flex items-center font-semibold space-x-4 py-6 w-full w-full px-5">
              <span className="text-2xl">
                <IoLogOutOutline />{" "}
              </span>
              <p>Log out</p>
            </button>
          </div>
        </div>
      </aside>
      <div className="flex justify-between mr-4 md:hidden">
        <NavLink
          to="/"
          className="py-2 xs:space-x-4 flex justify-center items-center text-lg"
        >
          <img src={Logo} alt="" className="w-14" />
          <span className="font-semibold">moView</span>
        </NavLink>
        <button className="text-3xl" onClick={toggleSidebar}>
          {isSidebarOpen ? <AiOutlineClose /> : <FiMenu />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
