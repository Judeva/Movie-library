import { Link } from "react-router-dom";
import "./Movie.css";

const Movie =({
    id,
    name,
    genres,
    runtime,
    premiered,
    officialSite,
    image,
    summary
})=>{
   
    return(
       
        <div className='movie-section'>
            <img className='movie-section-img' src={image.medium}/>
            <h2 className='movie-section-title'>{name} ({premiered.slice(0,4)})</h2>
            <p className ='movie-section-genres'>{genres.join(', ')} | {runtime} minutes</p>
            <div className ='movie-section-summary' dangerouslySetInnerHTML={{__html: summary}}/>
            <a href={officialSite} className="movie-section-link" target='blank'>Visit official site</a>
            <input type="submit" className="movie-section-btn-remove" value ="Remove From Favorites"/>
            <input type="submit" className="movie-section-btn-add" value ="Add to Favorites"/>
        </div>
    
    );
}

export default Movie;

//2011-09-22"