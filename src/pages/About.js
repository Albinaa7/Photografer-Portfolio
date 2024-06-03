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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  content: {
    maxWidth: '600px',
    marginLeft: '20px',
    textAlign: 'left',
    height: '470px', // фиксированная высота
    overflow: 'auto', // прокрутка
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  h1: {
    fontSize: '3em',
    marginBottom: '20px',
    fontWeight: '700',
    color: '#333'
  },
  p: {
    fontSize: '1.2em',
    lineHeight: '1.6em',
    color: '#666',
    marginBottom: '15px'
  },
  image: {
    maxWidth: '60%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

const About = () => {
    return (
        <div style={styles.container}>
            <Navbar />
            <main style={styles.main}>
                <img src="/images/Aboutpage.jpg" alt="Nature" style={styles.image} />
                <div style={styles.content}>
                    <h1 style={styles.h1}>In Focus</h1>
                    <p style={styles.p}>
                        I have a strong drive to acquire uniqueness in my images by capturing the beauty of natural surroundings and its wildlife through black and white photography. By exploring photography in a way that would inspire people around the world to travel and visit wild areas, I aim to share the imagery that has been captured.
                    </p>
                    <p style={styles.p}>
                        Born into a family deeply connected to nature, my interest in wildlife only grew as I explored artistic views of painting, drawing, and sculpting. This passion was nurtured from an early age, with nature being an integral part of my life.
                    </p>
                    <p style={styles.p}>
                        As a photographer, I take time to truly study my subjects and share my insights, which allows for intuitive guidance when working with other photographers.
                    </p>
                    <p style={styles.p}>
                        I capture moments that showcase the beauty of wildlife and the natural scenery that embraces every inch of the wilderness.
                    </p>
                    <p style={styles.p}>
                        Through extensive travel, I have developed a curiosity for culture and an interest in people and their origins. This authentic interest makes me not only a knowledgeable guide in natural settings but also an inspiring and entertaining host with a unique way of connecting with people.
                    </p>
                    <p style={styles.p}>
                        Over the past 8 years, my interest and passion for photography have won me awards, and my captivating images have been published in both national and international publications.
                    </p>
                    <p style={styles.p}>
                        Currently, I work as a resident photographer at a renowned nature reserve, sharing the beauty of the wild through my lens.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;
