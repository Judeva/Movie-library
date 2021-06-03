import { Fragment } from "react";
import Review from "../review/Review";
import "./Movie.css";

const Movie =()=>{
    return(
       
        <div className='movie-section'>
            <img className='movie-section-img' src='https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'/>
            <h2 className='movie-section-title'>Movie Title (2009)</h2>
            <p className ='movie-section-genres'>Drama, Thriller, Comedy | 90 minutes</p>
            <p className ='movie-section-summary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum turpis eget finibus volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras condimentum eros sit amet pretium fermentum. Pellentesque euismod, massa non sollicitudin accumsan, elit nisi mollis erat, a vehicula est leo ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nec nisi massa.</p>
            <a href="http://www.hbo.com/girls" className="movie-section-link">Visit official site</a>
            <input type="submit" className="movie-section-btn" value ="Remove From Favorites"/>
            <Review/>
        </div>
       
    );
}

export default Movie;