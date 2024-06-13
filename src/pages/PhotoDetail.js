import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const photos = [
    { id: 1, title: 'Sunset', url: '/images/Sunset.jpg', description: 'Beautiful sunset over the hills.' },
    { id: 2, title: 'Mountain', url: '/images/Mountain.jpg', description: 'Majestic mountain view.' },
    { id: 3, title: 'River', url: '/images/River.jpg', description: 'Majestic river view.' },
    // Остальные фотографии...
];

const PhotoDetail = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const photo = photos.find(p => p.id === parseInt(id));

    // Загрузка отзывов из localStorage при первой загрузке компонента
    useEffect(() => {
        const savedReviews = JSON.parse(localStorage.getItem(`photo-${id}-reviews`)) || [];
        setReviews(savedReviews);
    }, [id]);

    // Сохранение отзывов в localStorage
    const saveReviewsToLocalStorage = (reviews) => {
        localStorage.setItem(`photo-${id}-reviews`, JSON.stringify(reviews));
    };

    // Добавление отзыва
    const addReview = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newReview = {
            id: reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1,
            username: formData.get('username'),
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment'),
        };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        saveReviewsToLocalStorage(updatedReviews);
        event.target.reset();
    };

    // Удаление отзыва
    const deleteReview = (reviewId) => {
        const updatedReviews = reviews.filter(review => review.id !== reviewId);
        setReviews(updatedReviews);
        saveReviewsToLocalStorage(updatedReviews);
    };

    // Форма для отзыва
    const reviewForm = (
        <div>
            <h3>Add a Review</h3>
            <form onSubmit={addReview}>
                <label htmlFor="username">Your Name:</label><br />
                <input type="text" id="username" name="username" required /><br /><br />
                <label htmlFor="rating">Rating (1-5):</label><br />
                <input type="number" id="rating" name="rating" min="1" max="5" required /><br /><br />
                <label htmlFor="comment">Comment:</label><br />
                <textarea id="comment" name="comment" rows="4" required /><br /><br />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );

    // Отображение отзывов
    const reviewList = (
        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            {reviews.map(review => (
                <div key={review.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <strong>{review.username}</strong> rated it {review.rating}/5<br />
                    {review.comment}<br />
                    <button onClick={() => deleteReview(review.id)}>Delete Review</button>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <Navbar />
            <main>
                {photo ? (
                    <div style={{ textAlign: 'center' }}>
                        <h1>{photo.title}</h1>
                        <img src={photo.url} alt={photo.title} style={{ maxWidth: '600px', height: 'auto' }} />
                        <p>{photo.description}</p>
                        <h2>Reviews</h2>
                        {reviews.length > 0 ? reviewList : <p>No reviews yet.</p>}
                        {reviewForm}
                    </div>
                ) : (
                    <p>Photo not found</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default PhotoDetail;
