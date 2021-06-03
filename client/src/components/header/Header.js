import SearchBar from "../search-bar/Search-bar";
import './Header.css';

const Header = () => {
    return (
        <div className="toolbar">
            <p className="title">My Movie collection</p>
            <SearchBar />
        </div>
    );
}

export default Header;