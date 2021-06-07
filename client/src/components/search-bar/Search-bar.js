import { useContext, useState } from 'react';
import CollectionContext from '../../contexts/collectionContext';

import './Search-bar.css';

const SearchBar = () => {


  const [searchInput, setSearchInput] = useState("");

  const { movies, setMovies } = useContext(CollectionContext);

  const onSearchClickHandler = (searchInput) => {

    if (searchInput !== '') {
      let searchText = searchInput.toLowerCase();
      let filter = movies.filter(x =>
        x.name.toLowerCase()
          .includes(searchText))
      setMovies(filter);
      setSearchInput('');
    }
  }

  return (
    <div className='search-div'>
      <input
        type='text'
        id='search-input'
        placeholder='Search by movie title...'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} />

      <input
        type="submit"
        id="search-btn"
        value="Search"
        onClick={(e) => onSearchClickHandler(searchInput)} />
    </div>
  );
}

export default SearchBar;