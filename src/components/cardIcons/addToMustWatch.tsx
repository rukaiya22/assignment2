import React, {MouseEvent, useContext} from "react";
import { UpcomingMoviesContext } from "../../contexts/upcomingMoviesContext";
import IconButton from "@mui/material/IconButton";
import PlayListAdd from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces"

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(UpcomingMoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to Must Watch" onClick={onUserSelect}>
      <PlayListAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;
