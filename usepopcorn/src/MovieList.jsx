import { useState } from "react";
import { Movie } from "./Movie";

export const MovieList = () => {
    const [movies, setMovies] = useState(tempMovieData);
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imbID} />
            ))}
        </ul>
    );
};
