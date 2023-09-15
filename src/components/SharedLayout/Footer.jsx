import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
    const date= new Date
    const year = date.getFullYear()
  return (
    <footer>
      <div className="my-10 flex flex-col justify-center items-center space-y-5">
        <div className="space-x-8 text-2xl">
          <button className="">
            <ImFacebook2 />
          </button>
          <button className="">
            <BsInstagram />
          </button>
          <button className="">
            <BsTwitter />
          </button>
          <button className="">
            <AiFillYoutube />
          </button>
        </div>

        <div className="flex flex-col space-y-3 font-semibold sm:space-y-0 sm:flex-row sm:space-x-8">
          <a href="" className="text-center">
            Conditions of Use
          </a>
          <a href="" className="text-center">
            Privacy & Policy
          </a>
          <a href="" className="text-center">
            Press Room
          </a>
        </div>

        <div className="text-grey3 font-semibold">
          &copy;{year} MovieBox by Ayadi Samuel
        </div>
      </div>
    </footer>
  );
};

export default Footer;
