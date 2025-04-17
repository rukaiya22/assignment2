import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface UpcomingMovieContextInterface {
    mustWatch: number[];
    addToMustWatch: ((movie: BaseMovieProps) => void);
    removeFromMustWatch: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);  // NEW
}
const initialContextState: UpcomingMovieContextInterface = {
    mustWatch: [],
    addToMustWatch: () => {},
    removeFromMustWatch: () => {},
    addReview: (movie, review) => { movie.id, review},  // NEW
};

export const UpcomingMoviesContext = React.createContext<UpcomingMovieContextInterface>(initialContextState);

const UpcomingMoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>( [] )  // NEW

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((mId) => mId !== movie.id));
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

 return (
        <UpcomingMoviesContext.Provider
            value={{
                mustWatch,
                addToMustWatch,
                removeFromMustWatch,
                addReview,    // NEW
            }}
        >
            {children}
        </UpcomingMoviesContext.Provider>
    );
}

export default UpcomingMoviesContextProvider;
