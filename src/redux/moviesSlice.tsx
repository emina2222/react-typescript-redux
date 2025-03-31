import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies =
    createAsyncThunk('movies/fetchMovies', async (query: string) => {
        const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
        return response.data.results;
    });

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            });
    }
})

export default moviesSlice.reducer;