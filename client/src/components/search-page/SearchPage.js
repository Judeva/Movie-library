import Movie from "../movie/Movie";
import SearchBar from "../search-bar/Search-bar";
import './SearchPage.css';
import * as movieService from '../../services/movieService';
import { useEffect, useState } from "react";

const SearchPage = () => {

    const [movies, setMovies] = useState(null);

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
            <SearchBar id="searchPage-searchBar" />
            <ul className='searchPage-ul'>
                {movies&&movies.map(x => (
                    <Movie
                        key={x._id}{...x}
                    />
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;