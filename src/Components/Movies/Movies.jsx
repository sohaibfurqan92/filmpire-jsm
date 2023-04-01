import React, { useState, useEffect } from 'react';
import { Selector } from 'react-redux';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name. <br /> Please search for something
          else
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'An error has occoured!';
  }
  return <MovieList movies={data} />;
};

export default Movies;
