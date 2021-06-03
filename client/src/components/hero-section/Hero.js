import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-section">
            <h2 id="hero-title">Movies</h2>
            <p id='hero-section-p'>Search your favorite movies and rate for the best. Create your personal collection of top nominated.</p>
            <input
                id="hero-section-btn"
                type='submit'
                value='Search' />
        </div>
    );
}
export default Hero;