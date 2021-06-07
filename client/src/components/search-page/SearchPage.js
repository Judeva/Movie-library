import Movie from "../movie/Movie";
import SearchBar from "../search-bar/Search-bar";
import CollectionContext from '../../contexts/collectionContext';
import * as movieService from '../../services/movieService';
import './SearchPage.css';
import { useContext, useEffect } from "react";

const SearchPage = () => {

    const { movies, setMovies } = useContext(CollectionContext);
 
    useEffect(() => {
        movieService.getAll()
          .then(res => {
        
            setMovies(res);
          }).catch(err => {
            console.log(err);
          })
      }, [])
    
    return (
        <div className="searchPage-section" >
            <h2 id='searchPage-title'>Search</h2>
            <div className="searchBar-container">
            <SearchBar/>
            </div>
            <ul className='searchPage-ul'>
                {movies && movies.map(x => (
                    <Movie
                        key={x.id}{...x}
                    />
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;