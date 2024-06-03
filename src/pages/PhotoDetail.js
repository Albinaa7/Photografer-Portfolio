import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const photos = [
    { id: 1, title: 'Sunset',   url: '/images/Sunset.jpg', description: 'Beautiful sunset over the hills.' },
    { id: 2, title: 'Mountain', url: '/images/Mountain.jpg', description: 'Majestic mountain view.' },
    { id: 3, title: 'River',    url: '/images/River.jpg', description: 'Majestic river view.' },
    { id: 4, title: 'Bird',     url: '/images/Bird.jpg', description: 'Little cutie bird.' },
    { id: 5, title: 'Sky',      url: '/images/Sky.jpg', description: 'Majestic sky view.' },
    { id: 6, title: 'Cat',      url: '/images/Cat.jpg', description: 'Beautiful cat.' },
    { id: 7, title: 'Cappadocia', url: '/images/Cappadocia.jpg', description: 'Majestic Cappadocia view.' },
    { id: 8, title: 'Almaty',   url: '/images/Almaty.jpg', description: 'Majestic Almaty view.' },
    { id: 9, title: 'Ocean',   url: '/images/Ocean.jpg', description: 'Majestic Ocean view.' },
    { id: 10, title: 'Lion',   url: '/images/Lion.jpg', description: 'Beauty Lion.' },
    { id: 11, title: 'Sand',   url: '/images/Sand.jpg', description: 'Majestic sand view.' },
    { id: 12, title: 'Jungle',   url: '/images/Jungle.jpg', description: 'Majestic Jungle.' },
    // Добавьте больше фотографий здесь
];

const PhotoDetail = () => {
    const { id } = useParams();
    const photo = photos.find(p => p.id === parseInt(id));

    return (
        <div>
            <Navbar />
            <main>
                {photo ? (
                    <div style={{ textAlign: 'center' }}>
                        <h1>{photo.title}</h1>
                        <img src={photo.url} alt={photo.title} style={{ maxWidth: '600px', height: 'auto' }} />
                        <p>{photo.description}</p>
                    </div>
                ) : (
                    <p>Photo not found</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default PhotoDetail;
