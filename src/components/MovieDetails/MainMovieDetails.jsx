import { useEffect, useState } from "react";
import React from "react";
import { BsFillHeartFill, BsLink45Deg } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const MainMovieDetails = ({ movieDetails, trailer}) => {
 

  // Function to Convert to UTC Date Format
  function convertStringToUTCDate(dateString) {
    const normalDate = new Date(dateString);

    if (isNaN(normalDate.getTime())) {
      return null;
    }

    const year = normalDate.getUTCFullYear();
    const month = normalDate.getUTCMonth() + 1;
    const day = normalDate.getUTCDate();

    const utcDate = new Date(Date.UTC(year, month, day));

    return utcDate;
  }

  const dateString = movieDetails.release_date;
  const utcDate = convertStringToUTCDate(dateString);

  return (
    <>
      <section className="ml-0 md:ml-60 md:mt-10">
        <div className="h-[55vh]">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            className="w-11/12 mx-auto rounded-xl object-cover h-full aspect-video brightness-50"
            alt={`${movieDetails.title}`}
          />
        </div>
        <div className="w-11/12 mx-auto">
          <div className="mt-8 mb-4">
            <Link
              to={`https://www.youtube.com/watch?v=${trailer.key}`}
              className="px-10 py-2 w-full rounded-lg bg-secondary justify-center flex items-center border border-primary space-x-3 md:w-8/12 lg:w-5/12"
            >
              <span className="text-xl text-primary pr-4">
                <PiTelevisionSimpleBold />
              </span>
              Watch Snippet
            </Link>
          </div>
          <div className="flex mt-6 mx-auto text-lg space-x-2 lg:space-x-4 flex-wrap">
            <p data-testid="movie-title" className="font-semibold">
              {movieDetails.title}
            </p>{" "}
            .
            {utcDate && (
              <p data-testid="movie-release-date">{utcDate.toDateString()}</p>
            )}
            <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>.
          </div>

          <div className="flex text-sm mt-5">
            <img
              src="https://imgs.search.brave.com/ImII3N0O1sGbv-0oswLTYyFl7eQP5eFnrNIGDoVlAe8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0lNREJfTG9n/b18yMDE2LnN2Zw.svg"
              alt=""
              className="w-10 mr-2"
            />{" "}
            {Math.round(movieDetails.vote_average * 10) / 10}/10
          </div>

          <div className="">
            <p data-testid="movie-overview" className="mt-5">
              {movieDetails.overview}
            </p>
          </div>

          <div className="mt-8 mb-6">
            <Link
              to={`${movieDetails.homepage}`}
              className="px-10 py-2 w-full justify-center items-center flex rounded-lg bg-primary text-white md:w-8/12 lg:w-5/12"
            >
              Movie Link{" "}
              <span className="text-2xl ml-4">
                <BsLink45Deg />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainMovieDetails;
