import Movie from "../movie/Movie";
import Review from "../review/Review";
import * as movieService from "../../services/movieService";
import AuthContext from "../../contexts/authContext";
import FavoriteContext from "../../contexts/favoriteContext";
import { useEffect, useState, useContext } from "react";
import CollectionContext from "../../contexts/collectionContext";


const Details = ({ match }) => {

    const [movie, setMovie] = useState();
    const { isAuthenticated, userData } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState();
    

    useEffect(() => {
        movieService.getOne(match.params._id)
            .then(res => {
                setMovie(res)
            })
            .catch(err => {
                console.log(err)
            });

        if (userData?.favorites.includes(match.params._id)) {
            setIsFavorite(true);
        }else{
            setIsFavorite(false);
        }
    }, [match.params._id, isFavorite])

    return (
       
            <div className="details-section">
                {console.log(movie)}
                {movie && <Movie
                    image={movie.image}
                    id={movie.id}
                    name={movie.name}
                    premiered={movie.premiered}
                    genres={movie.genres}
                    summary={movie.summary}
                    officialSite={movie.officialSite}
                />}
                {isAuthenticated && <Review />}
            </div>       
    );
}
export default Details;