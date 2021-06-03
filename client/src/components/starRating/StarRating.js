import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './StarRating.css';

const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    //TODO: use lifecycle for change state rating

    return (
        <div className='stars-div'>
            {[...Array(5)].map((star, i) => {
                const rateValue = 1 + i;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            id="radio"
                            value={rateValue}
                            onClick={() => setRating(rateValue)} />
                        <FaStar
                            className="star"
                            color={rateValue <= (hover||rating) ? "#ffc107" : "#e4e5e6"} 
                            onMouseEnter={()=>{setHover(rateValue)}}
                            onMouseLeave={()=>{setHover(null)}}
                            />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;