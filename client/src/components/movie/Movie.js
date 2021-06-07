import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import "./Movie.css";

const Movie = ({
    id,
    name,
    genres,
    runtime,
    premiered,
    officialSite,
    image,
    summary
}) => {

    const { userData, isAuthenticated } = useContext(AuthContext);

    const addToFavoritesHandler = () => {
        userData.favorites.push(id);
    }
    const removeFromFavoritesHandler = () => {

    }

    return (

        <div className='movie-section'>
            <Link to={`/movies/${id}`} className='movie-link'><img className='movie-section-img' src={image.medium} alt="poster" /></Link>
            <Link to={`/movies/${id}`} className='movie-link'><h2 className='movie-section-title'>{name} ({premiered.slice(0, 4)})</h2></Link>
            <p className='movie-section-genres'>{genres.join(', ')} | {runtime} minutes</p>
            <div className='movie-section-summary' dangerouslySetInnerHTML={{ __html: summary }} />
            <a href={officialSite} className="movie-section-link" target='blank'>Visit official site</a>

            {isAuthenticated && <div>
                <button
                    className="movie-section-btn-remove"
                    onClick={removeFromFavoritesHandler}>
                    Remove From Favorites</button>

                <button
                    className="movie-section-btn-add"
                    onClick={addToFavoritesHandler}>
                    Add to Favorites </button >
            </div>}
        </div>
    );
}

export default Movie;

