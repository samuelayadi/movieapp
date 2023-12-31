import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/SharedLayout/Navbar";
import Header from "../../components/SharedLayout/Header";
import MovieCardHeading from "../../components/MovieCard/MovieCardHeading";
import axios from "axios";
import Footer from "../../components/SharedLayout/Footer";

const Home = () => {
  const [posterDetails, setPosterDetails] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // API Details
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTU0NTM0ZWQxN2EyZWY3YjJkN2UyMjQzYjhmY2UzZiIsInN1YiI6IjY0ZmUzZWFkZGI0ZWQ2MTAzM2ExMDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1sotO3zZdTuukDG-th6N6kwySQt_XXHLGD6k2D2OfQ",
    },
  };

  useEffect(() => {
    // Request to get poster Details
    try {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?query=john%20wick%20parabellum&include_adult=false&language=en-US&page=1",
          options
        )
        .then((response) => setPosterDetails(response.data.results));
      setIsLoading(false);
    } catch (err) {
      console.error("There was a problem fetching the data:", err);
      setIsLoading(false);
    }

    // Request to get Movies Details
    try {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        )
        .then((response) => setMovies(response.data.results.slice(0, 10)));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, []);

  // Function for Searching Movies
  const searchMovie = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`,
        options
      )
      .then((response) => {
        if (!response) {
          throw new Error("Network response was not ok");
        }
        setMovies(response.data.results.slice(0, 30));
      })
      .catch((err) => {
        setError("Error searching for movies: " + err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="">
        {error !== "" && (
          <>
            <h2>{error}</h2>
          </>
        )}
      </div>

      {isLoading ? (
        <>
          <div className="h-screen w-full flex items-center justify-center ">
            <div
              className="w-20 h-20 rounded-full animate-spin
                    border-x-4 border-solid border-primmary-t-transparent"
            ></div>
          </div>
        </>
      ) : (
        <div>
          <Navbar
            searchMovie={searchMovie}
            search={search}
            setSearch={setSearch}
          />
          {posterDetails.map((poster) => (
            <Header key={poster.id} {...poster} />
          ))}

          <MovieCardHeading />

          <div className="grid grid-cols-1 container mx-auto py-10 gap-12 sm:grid-cols-1 md:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
