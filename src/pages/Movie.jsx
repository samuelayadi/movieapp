import React from "react";

const Movies = ({ favoriteMovies }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <ul>
          {favoriteMovies.map((movie) => (
            <li key={movie.id} className="mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt=""
                className="object-cover h-[200px] w-full"
              />
              <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
              <p className="text-gray-600">{movie.release_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
