import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../images/heart.jpg'; // Путь к изображению сердечка
import korzina from '../images/korzina.jpg'; // Путь к изображению корзины

const iconStyle = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
};

const PhotoCard = ({ photo, addToFavorites, removeFromFavorites }) => {
    const handleClick = () => {
        if (addToFavorites) {
            addToFavorites(photo.id);
        } else if (removeFromFavorites) {
            removeFromFavorites(photo.id);
        }
    };

    return (
        <div className="photo-card" style={{ position: 'relative' }}>
            {addToFavorites && <button onClick={handleClick} style={iconStyle}><img src={heart} alt="Add to Favorites" style={{ width: '27px', height: '18px' }} /></button>}
            {removeFromFavorites && <button onClick={handleClick} style={iconStyle}><img src={korzina} alt="Remove from Favorites" style={{ width: '27px', height: '18px' }} /></button>}
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <Link to={`/photo/${photo.id}`}>View Details</Link>
        </div>
    );
};

export default PhotoCard;
