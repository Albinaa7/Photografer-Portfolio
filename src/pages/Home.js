import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: '1',
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f4f4f4'
  },
  h1: {
    fontSize: '3em',
    marginBottom: '20px',
    fontWeight: '700'
  },
  p: {
    fontSize: '1.2em',
    lineHeight: '1.6em',
    marginBottom: '30px',
    color: '#666'
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  photoCard: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    overflow: 'hidden',
    textAlign: 'center',
    margin: '20px',
    width: '50%', 
    maxWidth: '1500px' 
  },
  photoCardImg: {
    width: '100%',
    height: '100%'
  },
  photoCardTitle: {
    margin: '10px 0',
    fontWeight: 'bold'
  }
};

const photos = [
  { title: '', imageUrl: '/images/Homepage2.jpg' }
];

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.h1}>Welcome to the Photographer's Portfolio</h1>
        <p style={styles.p}>
          Explore a collection of breathtaking images that capture the beauty of our natural world. From the peaks of majestic mountains to the serenity of a tranquil lake, each photograph tells a story of adventure and wonder.
        </p>
        <div style={styles.gallery}>
          {photos.map((photo, index) => (
            <div key={index} style={styles.photoCard}>
              <img src={photo.imageUrl} alt={photo.title} style={styles.photoCardImg} />
              <h3 style={styles.photoCardTitle}>{photo.title}</h3>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
