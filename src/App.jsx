import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
