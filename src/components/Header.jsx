import React from "react";
import {useEffect, useState} from 'react';
import { BsFillPlayCircleFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ title, backdrop_path, overview, vote_average}) => {
  // Poster URL
  const posterURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <section className="text-white h-[85vh] poster-section-container">
      <div className="absolute h-[100vh] w-full top-0 z-10 opacity-50 bg-black"></div>
      <div
        className="w-full h-[100vh] top-0 absolute"
        style={{
          backgroundImage: `url(${posterURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`w-full bg-transparent flex items-center justify-start h-full top-0 z-30 relative poster-container`}
        >
          <div className="container-fluid xs:container mx-auto mt-5 lg:px-6 lg:mt-0">
            <div className="lg:w-6/12 xl:w-5/12">
              <p className="mt-16  text-xl xs:mt-6 xs:text-3xl font-semibold lg:text-5xl">
                {title}
              </p>
              <div className="flex mt-4">
                <div className="flex">
                  <img
                    src="https://imgs.search.brave.com/ImII3N0O1sGbv-0oswLTYyFl7eQP5eFnrNIGDoVlAe8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0lNREJfTG9n/b18yMDE2LnN2Zw.svg"
                    alt=""
                    className="w-10 mr-2"
                  />{" "}
                  {Math.round(vote_average * 10) / 10}/100
                </div>
              </div>
              <p className="text-sm mt-6 xs:text-md">{overview}</p>
              <button className="mt-6 px-5 py-2 bg-primary flex items-center rounded-lg">
                <span>
                  <BsFillPlayCircleFill className="mr-3" />
                </span>
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
