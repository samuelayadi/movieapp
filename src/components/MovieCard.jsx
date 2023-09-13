import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieDetails = ({
  title,
  poster_path,
  id,
  popularity,
  release_date,
  movies,
}) => {
  const [color, setColor] = useState(
    localStorage.getItem("favorites") &&
      JSON.parse(localStorage.getItem("favorites")).includes(id)
      ? "primary opacity-90"
      : "grey bg-grey2"
  );



  const updateFavorites = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.includes(movieId);
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movieId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const toggleColor = () => {
    updateFavorites(id);
    if (color === "grey bg-grey2") {
      setColor("primary opacity-90");
    } else {
      setColor("grey bg-grey2");
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(id)) {
      setColor("primary opacity-90");
    }
  }, [id]);

  return (
    <div className="h-[500px] mx-auto">
      <div className="flex justify-end">
        <button
          className={`text-2xl px-2 py-2 mr-2 mt-2 absolute rounded-full text-${color} z-40`}
          onClick={toggleColor}
        >
          <AiFillHeart />
        </button>
      </div>
      <Link to={`/movies/${id}`}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt=""
            className="object-cover h-[400px] mx-auto z-30"
          />
        ) : (
          <img
            src="https://imgs.search.brave.com/EzHgAzoZ468JxKqIrhgrE3-c7fCMcxxexVwkGMDouvU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc3VtbWVyLTUw/MC8zMi9waG90b19p/bWFnZV9waWN0dXJl/X2ltYWdlX3BsYWNl/aG9sZGVyX2xhbmRz/Y2FwZS0xMjgucG5n"
            alt=""
            className="object-cover h-[400px] mx-auto"
          />
        )}
        <p className="text-sm xs:text-md mt-4 text-grey3">{release_date}</p>

        <p className="xs:text-lg font-semibold line-clamp-1 w-[250px]">
          {title}
        </p>
        <div className="flex mt-2">
          <div className="flex text-sm">
            <img
              src="https://imgs.search.brave.com/ImII3N0O1sGbv-0oswLTYyFl7eQP5eFnrNIGDoVlAe8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0lNREJfTG9n/b18yMDE2LnN2Zw.svg"
              alt=""
              className="w-10 mr-2"
            />{" "}
            {Math.round(popularity)}.0/100
          </div>
        </div>
      </Link>


    </div>
  );
};

export default MovieDetails;
