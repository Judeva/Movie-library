import Movie from "../movie/Movie";
import Review from "../review/Review";
import * as movieSevice from "../../services/movieService";
import { useEffect, useState } from "react";


const Details = ({ match }) => {

    let [movie, setMovie] = useState();
    // const user = useContext(AuthContext);

    useEffect(() => {
        movieSevice.getOne(match.params._id)
            .then(res => {
                console.log(res);
                setMovie(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [match.params._id])

    return (
        <div className="details-section">
            {console.log(movie)}
            {movie &&<Movie 
            image={movie.image}
            id={movie.id}
            name={movie.name}
            premiered ={movie.premiered}
            genres={movie.genres}
            summary={movie.summary}
            officialSite={movie.officialSite} />}
            <Review/>
        </div>
    );
}
export default Details;