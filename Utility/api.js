
import axios from 'axios';

const apiKey = 'fd95ce3e47294b0a395cdaa0eadbaefe';
const apiBaseUrl = 'https://api.themoviedb.org/3/';

export const movieDetailApi = (id) => `${apiBaseUrl}movie/${id}?api_key=${apiKey}`;
export const creditsMoviesApi = (id) => `${apiBaseUrl}movie/${id}/credits?api_key=${apiKey}`;
export const similarMoviesApi = (id) => `${apiBaseUrl}movie/${id}/similar?api_key=${apiKey}`;

export const HandleMovieDetailApi = async (id) => {
    try {
        const response = await axios.get(movieDetailApi(id));
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details: ", error);
    }
};

export const HandleCreditsMoviesApi = async (id) => {
    try {
        const response = await axios.get(creditsMoviesApi(id));
        return response.data;
    } catch (error) {
        console.error("Error fetching movie credits: ", error);
    }
};

export const HandleSimilarMoviesApi = async (id) => {
    try {
        const response = await axios.get(similarMoviesApi(id));
        return response.data;
    } catch (error) {
        console.error("Error fetching similar movies: ", error);
    }
};
