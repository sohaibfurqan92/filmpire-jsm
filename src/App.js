import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './Components/styles';

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from './Components';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolBar} />
        <Switch>
          <Route exact path={'/movie/:id'}>
            <MovieInformation />
          </Route>
          <Route exact path={'/actors/:id'}>
            <Actors />
          </Route>
          <Route exact path={'/'}>
            <Movies />
          </Route>
          <Route exact path={'/profile/:id'}>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
