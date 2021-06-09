import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {


    return (
        <div className="hero-section">
            <h2 id="hero-title">Movies</h2>
            <p id='hero-section-p'>Search your favorite movies and rate for the best. Create your personal collection of top nominated.</p>
            <Link to="/search" id="hero-section-btn">Search</Link>
        </div>
    );
}
export default Hero;