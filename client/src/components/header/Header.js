import Search from "../search/Search"
import './Header.css'
const Header = () => {
    return (
        <div className="toolbar">
            
                <p className="title">My Movie collection</p>
           
            
            <Search />
        </div>
    );
}

export default Header;