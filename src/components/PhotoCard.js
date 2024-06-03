import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCard = ({ photo, addToFavorites, removeFromFavorites }) => {
    const handleClick = () => {
        if (addToFavorites) {
            addToFavorites(photo.id);
        } else if (removeFromFavorites) {
            removeFromFavorites(photo.id);
        }
    };

    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <Link to={`/photo/${photo.id}`}>View Details</Link>
            {addToFavorites && <button onClick={handleClick}>Add to Favorites</button>}
            {removeFromFavorites && <button onClick={handleClick}>Remove from Favorites</button>}
        </div>
    );
}

export default PhotoCard;
