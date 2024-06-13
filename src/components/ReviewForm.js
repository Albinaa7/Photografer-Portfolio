import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(reviewText);
        setReviewText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a review..."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;
