import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [reviews, setReviews] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };
        setReviews([...reviews, newReview]);

        setFormData({ name: '', email: '', message: '' });
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <div style={styles.container}>
            <Navbar />
            <main style={styles.main}>
                <div style={styles.formContainer}>
                    <h1 style={styles.h1}>Contact</h1>
                    <p style={styles.p}>
                        Should you wish to contact me, you're welcome to complete the form provided or email me at marco@example.com. Additionally, you can reach out through my social media channels.
                        <br /><br />
                        As I dedicate a significant portion of my time to capturing the beauty and remarkable moments of nature, my responses may experience delays. Nevertheless, send me a message, and I'll get back to you promptly once I'm back at my computer.
                    </p>

                    <form className="contact-form" style={styles.form} onSubmit={handleSubmit}>
                        <div className="form-group" style={styles.formGroup}>
                            <label style={styles.label}>Name:</label>
                            <input style={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <label style={styles.label}>Email:</label>
                            <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <label style={styles.label}>Message:</label>
                            <textarea style={styles.textarea} name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" style={styles.button}>Submit</button>
                    </form>
                </div>

                <div className="reviews" style={styles.reviews}>
                    <h2 style={styles.h2}>Reviews</h2>
                    <div className="reviews-list" style={styles.reviewsList}>
                        {reviews.map((review) => (
                            <div key={review.id} className="review" style={styles.review}>
                                <p><strong>Name:</strong> {review.name}</p>
                                <p><strong>Email:</strong> {review.email}</p>
                                <p><strong>Message:</strong> {review.message}</p>
                                <button onClick={() => handleDelete(review.id)} style={styles.deleteButton}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#f4f4f4'
    },
    formContainer: {
        flex: '1',
        marginRight: '20px'
    },
    h1: {
        fontSize: '2.5em',
        marginBottom: '20px',
        fontWeight: '700',
        color: '#333'
    },
    h2: {
        fontSize: '2em',
        marginBottom: '10px',
        fontWeight: '700',
        color: '#333'
    },
    p: {
        fontSize: '1.2em',
        lineHeight: '1.6em',
        color: '#666',
        marginBottom: '15px'
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: '500'
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em'
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em',
        minHeight: '100px'
    },
    button: {
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em'
    },
    reviews: {
        flex: '1',
        marginLeft: '20px'
    },
    reviewsList: {
        maxHeight: '400px',
        overflowY: 'auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    review: {
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px',
        marginBottom: '10px'
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9em'
    }
};

export default Contact;
