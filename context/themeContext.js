// AppProvider.js
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [trandMovieDetails, setTrandMovieDetails] = useState(null)
  const [creditsDetails, setCreditsDetails] = useState(null)
  const [similarMovieDetails, setSimilarMovieDetails] = useState(null)

  const apiKey = 'fd95ce3e47294b0a395cdaa0eadbaefe'
  const apiBaseUrl = 'https://api.themoviedb.org/3/'

  const movieDetailApi = (id) => `${apiBaseUrl}movie/${id}?api_key=${apiKey}`
  const creditsMoviesApi = (id) => `${apiBaseUrl}movie/${id}/credits?api_key=${apiKey}`
  const similarMoviesApi = (id) => `${apiBaseUrl}movie/${id}/similar?api_key=${apiKey}`
  
  const handleMovieDetailApi = async (id) => {
      try {
          const response = await axios.get(movieDetailApi(id));
          setTrandMovieDetails(response.data);
      } catch (error) {
          console.error("Error fetching movie details: ", error);
      }
  }

  const handleCreditsMoviesApi = async (id) => {
      try {
          const response = await axios.get(creditsMoviesApi(id));
          setCreditsDetails(response.data);
      } catch (error) {
          console.error("Error fetching movie details: ", error);
      }
  }

  const handleSimilarMoviesApi = async (id) => {
      try {
          const response = await axios.get(similarMoviesApi(id));
          setSimilarMovieDetails(response.data);
      } catch (error) {
          console.error("Error fetching movie details: ", error);
      }
  }

  return (
    <AppContext.Provider value={{ trandMovieDetails, creditsDetails, similarMovieDetails, handleMovieDetailApi,
     handleCreditsMoviesApi, handleSimilarMoviesApi }}>
      {children}
    </AppContext.Provider>
  );
}
