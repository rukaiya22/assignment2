import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import { MovieListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  }
};

const MovieListPageTemplate: React.FC<MovieListPageTemplateProps> = ({
  movies, title, action, onBack, onForward, disableBack, disableForward
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        {/* Pass the onBack and onForward functions to Header */}
        <Header
          title={title}
          onBack={onBack}
          onForward={onForward}
          disableBack={disableBack}
          disableForward={disableForward}
        />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList
          action={action}
          movies={movies}
          selectFavourite={() => { }}
          selectMustWatch={() => { }} />
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
