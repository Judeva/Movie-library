import Movie from "../movie/Movie";
import SearchBar from "../search-bar/Search-bar";
import './SearchPage.css';

const SearchPage =()=>{
    return(
        <div className ="searchPage-section" >
            <h2 id='searchPage-title'>Search</h2>
           <SearchBar id="searchPage-searchBar"/>
           <Movie/>
        </div>
    );
}

export default SearchPage;