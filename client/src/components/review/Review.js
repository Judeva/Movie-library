import StarRating from '../starRating/StarRating';
import './Review.css';

const Review = () => {
    return (
        <div className="review-section">
            <h1 className="review-title">Your Review</h1>
            <StarRating/>
            <textarea
                className="review-textarea"
                placeholder='Your private notes and comments about the movie...'>
            </textarea>
        </div>
    );
}

export default Review;