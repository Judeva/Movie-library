import Movie from "../movie/Movie";
import SearchBar from "../search-bar/Search-bar";
import CollectionContext from '../../contexts/collectionContext';
import './SearchPage.css';
import { useContext } from "react";

const SearchPage = () => {

    const { movies } = useContext(CollectionContext);

    return (
        <div className="searchPage-section" >
            <h2 id='searchPage-title'>Search</h2>
            <div className="searchBar-container">
                <SearchBar />
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