import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // get genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbKey}`,
    }),
    // get movies by [TYPE]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          // get movies by category
          return `movie/${genreIdOrCategoryName}?api_key=${tmdbKey}&page=${page}`;
        }

        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          // get movies by genre
          return `discover/movie?with_genres=${genreIdOrCategoryName}&api_key=${tmdbKey}&page=${page}`;
        }
        // get popular movies
        return `movie/popular?api_key=${tmdbKey}&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
