import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import * as movieService from '../../services/movieService';
import "./Movie.css";

const Movie = ({
    id,
    name,
    genres,
    runtime,
    premiered,
    officialSite,
    image,
    summary,
}) => {

    const { userData, isAuthenticated } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState();

    useEffect(() => {

    }, [])

    const addToFavoritesHandler = () => {
        userData.favorites.push(id);
        setIsFavorite(true);


        movieService.addToFavorites(userData.username, userData);

        console.log(userData.favorites);
    }
    const removeFromFavoritesHandler = () => {
        let index = userData.favorites.indexOf(id);
        userData.favorites.splice(index, 1);
        console.log(userData.favorites);
        setIsFavorite(false);
    }

    return (

        <div className='movie-section'>
            <Link to={`/movies/${id}`} className='movie-link'><img className='movie-section-img' src={image.medium} alt="poster" /></Link>
            <Link to={`/movies/${id}`} className='movie-link'><h2 className='movie-section-title'>{name} ({premiered.slice(0, 4)})</h2></Link>
            <p className='movie-section-genres'>{genres.join(', ')} | {runtime} minutes</p>
            <div className='movie-section-summary' dangerouslySetInnerHTML={{ __html: summary }} />
            <a href={officialSite} className="movie-section-link" target='blank'>Visit official site</a>

            {isAuthenticated && <div>
                {isFavorite && <button
                    className="movie-section-btn-remove"
                    onClick={removeFromFavoritesHandler}>
                    Remove From Favorites</button>}

                {!isFavorite && <button
                    className="movie-section-btn-add"
                    onClick={addToFavoritesHandler}>
                    Add to Favorites </button >}
            </div>}
        </div>
    );
}

export default Movie;

