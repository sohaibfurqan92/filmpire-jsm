import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbKey = process.env.REACT_APP_TMDB_KEY;
console.log(tmdbKey);
const page = 1;

// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // get genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbKey}`,
    }),
    // get movies by [TYPE]
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${tmdbKey}&&page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
