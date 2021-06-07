
import SearchBar from "../search-bar/Search-bar";
import { NavLink } from 'react-router-dom';
import AuthContext from "../../contexts/authContext";
import './Header.css';
import { useContext } from "react";

const Header = () => {

    const { user, isAuthenticated } = useContext(AuthContext);
    return (
        <div className="toolbar">
            <NavLink to="/" className="nav-link">My Movie collection</NavLink>
            {!isAuthenticated && <NavLink to="/register" className="nav-link">REGISTER</NavLink>}
            {!isAuthenticated&& <NavLink to="/login" className="nav-link">LOGIN</NavLink>}
            {isAuthenticated && <NavLink to="/logout" className="nav-link">LOGOUT</NavLink>}
            <SearchBar />
        </div>
    );
}

export default Header;