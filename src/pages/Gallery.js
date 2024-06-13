import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoCard from '../components/PhotoCard';

const photos = [
    { id: 1, title: 'Sunset', url: '/images/Sunset.jpg', category: 'Nature' },
    { id: 2, title: 'Mountain', url: '/images/Mountain.jpg', category: 'Nature' },
    { id: 3, title: 'River', url: '/images/River.jpg', category: 'Nature' },
    { id: 4, title: 'Bird', url: '/images/Bird.jpg', category: 'Birds' },
    { id: 5, title: 'Sky', url: '/images/Sky.jpg', category: 'Nature' },
    { id: 6, title: 'Cat', url: '/images/Cat.jpg', category: 'Animals' },
    { id: 7, title: 'Cappadocia', url: '/images/Cappadocia.jpg', category: 'Nature' },
    { id: 8, title: 'Almaty', url: '/images/Almaty.jpg', category: 'Nature' },
    { id: 9, title: 'Ocean', url: '/images/Ocean.jpg', category: 'Nature' },
    { id: 10, title: 'Lion', url: '/images/Lion.jpg', category: 'Animals' },
    { id: 11, title: 'Sand', url: '/images/Sand.jpg', category: 'Nature' },
    { id: 12, title: 'Jungle', url: '/images/Jungle.jpg', category: 'Nature' },
    { id: 13, title: 'Roses', url: '/images/Roses.jpg', category: 'Flowers' },
    { id: 14, title: 'Peonies', url: '/images/Peonies.jpg', category: 'Flowers' },
    { id: 15, title: 'Lilac', url: '/images/Lilac.jpg', category: 'Flowers' },
    { id: 16, title: 'daisies', url: '/images/daisies.jpg', category: 'Flowers' },
    { id: 17, title: 'butterfly', url: '/images/butterfly.jpg', category: 'Birds' },
    { id: 18, title: 'Eagle', url: '/images/Eagle.jpg', category: 'Birds' },
    { id: 19, title: 'Dog', url: '/images/Dog.jpg',category: 'Animals' },
    { id: 20, title: 'Jaguar', url: '/images/Jaguar.jpg',category: 'Animals' },
    { id: 21, title: 'Rhinos', url: '/images/Rhinos.jpg',category: 'Animals' },
    { id: 22, title: 'Little tiger', url: '/images/Little tiger.jpg',category: 'Animals' },
    { id: 23, title: 'Hummingbird', url: '/images/Hummingbird.jpg',category: 'Birds' },
    { id: 24, title: 'sunflowers', url: '/images/sunflowers.jpg',category: 'Flowers' },
    { id: 25, title: 'Lily', url: '/images/Lily.jpg',category: 'Flowers' },
    { id: 26, title: 'White roses', url: '/images/White roses.jpg',category: 'Flowers' },
    { id: 27, title: 'cherry blossoms', url: '/images/cherry blossoms.jpg',category: 'Flowers' },
];

const Gallery = () => {
    const [favorites, setFavorites] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('All');

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

    const sortPhotos = (photos) => {
        const filteredPhotos = sortCriteria === 'All' ? photos : photos.filter(photo => photo.category === sortCriteria);
        return filteredPhotos.sort((a, b) => a.title.localeCompare(b.title));
    };

    const handleSortChange = (criteria) => {
        setSortCriteria(criteria);
    };

    return (
        <div>
            <Navbar onSortChange={handleSortChange} />
            <main style={{ padding: '20px' }}>
                <h1>Gallery</h1>
                <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                    {sortPhotos(photos).map(photo => (
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
};

export default Gallery;
