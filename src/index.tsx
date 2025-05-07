import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/popularMoviesPage";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from './pages/signUpPage';
import SignIn from './pages/signInPage';
import Confirm from './pages/confirmPage';
import AuthProvider from "./contexts/authContext";
import SignOutPage from './pages/signOutPage';
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <AuthProvider>
          <Routes>
            {/* <Route path="/movies/favourites" element={<FavouriteMoviesPage />} /> */}
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/confirm" element={<Confirm />} />
            
            <Route path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
            <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />} />
            {/* <Route path="/actors" element={<ActorsListPage />} /> */}
            {/* <Route path="/actors/:id" element={<ActorDetailPage />} />
            <Route path="/tv" element={<TVSeriesListPage />} />
            <Route path="/tv/:id" element={<TVSeriesDetailPage />} /> */}


            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/signout" element={<SignOutPage />} />
            </Route>
          </Routes>
          </AuthProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

