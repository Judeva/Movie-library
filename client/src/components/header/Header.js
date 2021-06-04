
import SearchBar from "../search-bar/Search-bar";
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div className="toolbar">

            <NavLink to="/" className="nav-link">My Movie collection</NavLink>
            <NavLink to="/register" className="nav-link">REGISTER</NavLink>
            <NavLink to="/login" className="nav-link">LOGIN</NavLink>
            <NavLink to="/logout" className="nav-link">LOGOUT</NavLink>
            <SearchBar />
        </div>
    );
}

export default Header;