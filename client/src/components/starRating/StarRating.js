import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './StarRating.css';

const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    //TODO: save in state

    return (
        <div className='stars-div'>
            {[...Array(5)].map((star, i) => {
                const rateValue = 1 + i;
                return (
                    <label key ={i}>
                        <input
                            key={i+5}
                            type="radio"
                            name="rating"
                            id="radio"
                            value={rateValue}
                            onClick={() => setRating(rateValue)} />
                        <FaStar
                            key={i+10}
                            className="star"
                            color={rateValue <= (hover || rating) ? "#ffc107" : "#e4e5e6"}
                            onMouseEnter={() => { setHover(rateValue) }}
                            onMouseLeave={() => { setHover(null) }}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;