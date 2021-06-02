import { useContext, useState } from 'react';
// import CollectionContext from '../../contexts/CollectionContext';
import './Search.css';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    // const { images, search } = useContext(CollectionContext);

    const onSearchClickHandler = (searchInput) => {

        let searchText = searchInput.toLowerCase();
        // let filter = images.filter(x =>
        //     x.title.toLowerCase()
        //         .includes(searchText) ||
        //     x.description.toLowerCase()
        //         .includes(searchText) ||
        //     x.creator.toLowerCase()
        //         .includes(searchText))

        // search(filter);
        // setSearchInput('');
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
                onClick={(e) => onSearchClickHandler(searchInput)}/>
        </div>
    );
}

export default Search;