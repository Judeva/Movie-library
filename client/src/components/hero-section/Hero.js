import './Hero.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import AuthContext from '../../contexts/authContext';
import CollectionContext from '../../contexts/collectionContext';

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