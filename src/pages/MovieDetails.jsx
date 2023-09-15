import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MainMovieDetails from "../components/MovieDetails/MainMovieDetails";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {

    // Api Details
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTU0NTM0ZWQxN2EyZWY3YjJkN2UyMjQzYjhmY2UzZiIsInN1YiI6IjY0ZmUzZWFkZGI0ZWQ2MTAzM2ExMDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1sotO3zZdTuukDG-th6N6kwySQt_XXHLGD6k2D2OfQ"; // Replace with your API key
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };


    // Request to get Movies
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => {
        const movieData = response.data;
        setMovieDetails(movieData);
        setIsLoading(false); 
      })
      .catch((err) => {
        setErrorStatus(true); 
        setErrorMessage(err.message); 
        setIsLoading(false); 
      });
  }, [id]);



  return (
    <div>
      {errorStatus ? (
        <div className="text-red-500">{errorMessage}</div>
      ) : isLoading ? (
        <div className="h-screen w-full flex items-center justify-center ">
          <div
            className="w-20 h-20 rounded-full animate-spin
                    border-x-4 border-solid border-primmary-t-transparent"
          ></div>
        </div>
      ) : (
        <>
          <Sidebar />
          <MainMovieDetails movieDetails={movieDetails} />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
