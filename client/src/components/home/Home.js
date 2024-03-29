import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/authContext';
import CollectionContext from '../../contexts/collectionContext';
import Favorites from '../favorites/Favorites';
import Hero from '../hero-section/Hero';

const Home = () => {

    const { userData } = useContext(AuthContext);
    const { movies, setFavorites } = useContext(CollectionContext);

    useEffect(() => {

        const favoriteMovies = [];
        movies.map(movie => {
            userData?.favorites?.map(favId => {
                if (movie.id === favId) {
                    favoriteMovies.push(movie)
                }
            })
        })
        setFavorites(favoriteMovies);
    }, [userData])


    return (

        <div className='home-section'>
            <Hero />
            <Favorites />
        </div>

    );
}

export default Home;