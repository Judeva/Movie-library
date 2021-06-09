import './Favorites.css';
import { useContext, useEffect} from "react";
import AuthContext from '../../contexts/authContext';
import CollectionContext from '../../contexts/collectionContext';
import { Link } from "react-router-dom";


const Favorites = () => {

    const {favorites } = useContext(CollectionContext);
    const { userData} = useContext(AuthContext);

    useEffect(() => {
        
    }, [userData]);

    return (
        <div className='favorites-section'>
            <h2 id='favorites-title'>Your Favorites</h2>
            <ul className='searchPage-ul'>
                {favorites && favorites.map(x => (
                    <Link
                        key={x.id}
                        to={`/movies/${x.id}`}
                        className='movie-link'>
                        <img
                            className='movie-section-img'
                            src={x.image.medium}
                            alt="poster" />
                    </Link>

                ))}
            </ul>
        </div>
    );
}

export default Favorites;