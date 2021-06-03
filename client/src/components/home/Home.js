import Favorites from '../favorites/Favorites';
import Hero from '../hero-section/Hero';

const Home = () => {
    return (
        <div className='home-section'>
            <Hero/>
            <Favorites/>
        </div>
    );
}

export default Home;