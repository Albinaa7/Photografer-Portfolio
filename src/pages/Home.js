import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: '1',
    padding: '10px 10px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f4f4f4'
  },
  h1: {
    fontSize: '3em',
    marginBottom: '10px',
    fontWeight: '700'
  },
  p: {
    fontSize: '1.2em',
    lineHeight: '1.6em',
    marginBottom: '40px',
    color: '#666'
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  photoCard: {
    position: 'relative',
    width: '100%',
    height: '430px', // Set height explicitly
    overflow: 'hidden',
    borderRadius: '25px',
    border: '3px solid #ddd',
    marginBottom: '10px'
  },
  photoCardImg: {
    width: '100%',
    height: '100%',
    borderRadius: '22px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  photoCardHover: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#FEFDFA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  photoCardHoverVisible: {
    opacity: '1'
  }
};

const photos = [
  { title: 'Amidst the vast, golden savannah of Africa, two majestic elephants stand side by side, embodying the spirit of the wild. Their wrinkled skin tells tales of ancient wisdom, while their powerful presence commands the landscape. The African sun casts a warm, golden hue, illuminating the bond between these gentle giants. This photograph captures not just a moment, but the essence of Africas untamed beauty, where every step echoes the rhythm of the wilderness and every gaze reflects a story of strength, resilience, and profound connection to the land.', imageUrl: '/images/Homepage2.jpg' },
  { title: 'Towering majestically against the horizon, these magnificent mountains rise like ancient sentinels, their snow-capped peaks piercing the sky. Bathed in the soft hues of dawn, the rugged terrain glows with a serene, almost ethereal light. Valleys carved by time stretch below, adorned with verdant forests and crystalline streams that weave through the landscape like shimmering threads. This photograph captures the awe-inspiring grandeur and tranquil beauty of natures highest cathedrals, where every peak whispers tales of adventure, and every vista invites the soul to wander and dream.', imageUrl: '/images/Homepage3.jpg' },
  { title: 'Flowing gracefully through a lush, verdant valley, this serene river reflects the towering grandeur of the majestic mountains that frame its course. The crystal-clear waters shimmer under the golden rays of the sun, meandering gently past emerald forests and wildflower meadows. As the river winds its way towards the distant horizon, it mirrors the skys hues and the rugged peaks, creating a perfect harmony between earth and sky. This photograph captures the tranquil beauty and sublime splendor of nature, where the peaceful river and the awe-inspiring mountains come together in a breathtaking panorama that invites the viewer to pause and be immersed in the wonder of the natural world.', imageUrl: '/images/Homepage1.jpg' }
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.h1}>Welcome to the Photographer's Portfolio</h1>
        <p style={styles.p}>
          Explore a collection of breathtaking images that capture the beauty of our natural world. From the peaks of majestic mountains to the serenity of a tranquil lake, each photograph tells a story of adventure and wonder.🩶
          Beauty is in the eye of the beholder🩶
        </p>
        <div style={styles.gallery}>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
            {photos.map((photo, index) => (
              <div
                key={index}
                style={styles.photoCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={photo.imageUrl} alt={photo.title} style={styles.photoCardImg} />
                <div style={{ ...styles.photoCardHover, ...(hoveredIndex === index ? styles.photoCardHoverVisible : {}) }}>
                  <p>{photo.title}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;