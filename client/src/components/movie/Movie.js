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

    const { isAuthenticated } = useContext(AuthContext);


    return (

        <div className='movie-section'>
            <Link to={`/movies/${id}`} className='movie-link'><img className='movie-section-img' src={image.medium} alt="poster" /></Link>
            <Link to={`/movies/${id}`} className='movie-link'><h2 className='movie-section-title'>{name} ({premiered.slice(0, 4)})</h2></Link>
            <p className='movie-section-genres'>{genres.join(', ')} | {runtime} minutes</p>
            <div className='movie-section-summary' dangerouslySetInnerHTML={{ __html: summary }} />
            <a href={officialSite} className="movie-section-link" target='blank'>Visit official site</a>
            {isAuthenticated && <input type="submit" className="movie-section-btn-remove" value="Remove From Favorites" />}
            {isAuthenticated && <input type="submit" className="movie-section-btn-add" value="Add to Favorites" />}
        </div>
    );
}

export default Movie;

