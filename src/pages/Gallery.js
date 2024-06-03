import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoCard from '../components/PhotoCard';

const photos = [
    { id: 1, title: 'Sunset', url: '/images/Sunset.jpg' },
    { id: 2, title: 'Mountain', url: '/images/Mountain.jpg' },
    { id: 3, title: 'River', url: '/images/River.jpg' },
    { id: 4, title: 'Bird', url: '/images/Bird.jpg' },
    { id: 5, title: 'Sky', url: '/images/Sky.jpg' },
    { id: 6, title: 'Cat', url: '/images/Cat.jpg' },
    { id: 7, title: 'Cappadocia', url: '/images/Cappadocia.jpg' },
    { id: 8, title: 'Almaty', url: '/images/Almaty.jpg' },
    { id: 9, title: 'Ocean', url: '/images/Ocean.jpg' },
    { id: 10, title: 'Lion', url: '/images/Lion.jpg' },
    { id: 11, title: 'Sand', url: '/images/Sand.jpg' },
    { id: 12, title: 'Jungle', url: '/images/Jungle.jpg' },
];

const Gallery = () => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (photoId) => {
        const favoritePhoto = photos.find(photo => photo.id === photoId);
        setFavorites([...favorites, favoritePhoto]);
    };

    const removeFromFavorites = (photoId) => {
        setFavorites(favorites.filter(photo => photo.id !== photoId));
    };

    const displayFavorites = () => {
        return favorites.map(photo => (
            <PhotoCard key={photo.id} photo={photo} removeFromFavorites={removeFromFavorites} />
        ));
    };

    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px' }}>
                <h1>Gallery</h1>
                <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                    {photos.map(photo => (
                        <PhotoCard key={photo.id} photo={photo} addToFavorites={addToFavorites} />
                    ))}
                </div>
                <h2>Favorite Photos</h2>
                <div className="favorites" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                    {displayFavorites()}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Gallery;
