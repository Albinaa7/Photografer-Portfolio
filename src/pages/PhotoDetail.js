// pages/PhotoDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const photos = [
    { id: 1, title: 'Sunset', url: '/images/Sunset.jpg', description: 'Captured during a tranquil evening hike, this beautiful sunset over the hills tells a story of serenity and natural splendor. As the sun dipped below the horizon, it painted the sky in a spectrum of warm hues, casting a golden glow over the landscape. The hills, silhouetted against the vibrant colors, create a perfect balance of light and shadow. This moment, frozen in time, reminds us of the simple yet profound beauty that nature offers at the end of each day.' },
    { id: 2, title: 'Mountain', url: '/images/Mountain.jpg', description: 'This majestic mountain panorama inspires awe in the grandeur of nature. Towering peaks, adorned with lush green forests, create a striking contrast against the clear blue sky. Snow-capped summits, bathed in morning sunlight, appear formidable and mysterious. This photograph serves as a reminder of natures power and the beauty of its shapes and textures.' },
    { id: 3, title: 'River', url: '/images/River.jpg', description: 'This stunning photograph captures the majestic essence of a serene river. In the early morning, the photographer ventured to the riverbank to capture the first rays of the rising sun, which gently bathed the waters surface in a golden glow. The river, like a mirror, reflects the clouds and ethereal hues of the morning sky, creating an illusion of tranquility and infinity. This place serves as a sanctuary for a myriad of wildlife and a source of inspiration for those who cherish the beauty of nature.' },
    { id: 4, title: 'Bird', url: '/images/Bird.jpg', description: 'The story behind capturing this little cutie bird is filled with patience and admiration. On an early spring morning, the photographer set out to a serene forest known for its rich birdlife. After hours of waiting quietly, this charming bird appeared, fluttering around before perching on a nearby branch. The moment was magical, with the morning light highlighting the bird’s vibrant feathers and curious eyes. This photo not only captures the beauty of the bird but also the peaceful ambiance of its natural habitat.' },
    { id: 5, title: 'Sky', url: '/images/Sky.jpg', description: 'In this breathtaking photograph, the sky unveils its infinite canvas of wonder. The photographer captured this majestic sky view during the fleeting moments of sunset, where the horizon blazes with hues of fiery orange and deepening shades of purple. Wispy clouds, painted in shades of pink and gold, drift across the vast expanse, adding texture to the celestial panorama. This snapshot of the sky invites contemplation, evoking a sense of awe at the grandeur of the natural world.' },
    { id: 6, title: 'Cat', url: '/images/Cat.jpg', description: 'This enchanting photograph captures the essence of feline grace and curiosity. The cat, with its sleek fur shimmering under the gentle sunlight, gazes serenely into the distance. Its eyes, pools of amber reflecting the world around it, convey a sense of mystery and wisdom. The photographer skillfully portrays the intricate details of the cat\'s whiskers and velvety paws, highlighting its delicate yet powerful presence. Set against a backdrop of soft shadows and muted tones, this image invites viewers to marvel at the timeless elegance and innate beauty of our feline companions' },
    { id: 7, title: 'Cappadocia', url: '/images/Cappadocia.jpg', description: 'Captured during the first light of dawn, this photograph showcases the ethereal beauty of Cappadocia, a land where history and natural wonder merge seamlessly. The hot air balloons, adorned with vibrant patterns and colors, float gracefully over the otherworldly landscape of fairy chimneys and ancient rock formations. The soft hues of the morning sky cast a magical glow upon the scene, painting the horizon in shades of pink, purple, and orange. Below, the valleys and canyons of Cappadocia stretch out in a mesmerizing mosaic of earthy tones and lush greenery. This image encapsulates the serene majesty and timeless allure of one of Turkey\'s most captivating destinations.' },
    { id: 8, title: 'Almaty', url: '/images/Almaty.jpg', description: 'The journey to capture this image was a meticulous endeavor. The photographer, an avid adventurer with a passion for exploring hidden gems, embarked on an early morning hike to reach a vantage point known only to a few locals. The climb was challenging, with steep paths and rocky terrains, but the reward was well worth the effort.As dawn began to break, the city of Almaty slowly emerged from the shadows, bathed in the soft, golden light of the rising sun. The timing was impeccable; the sky transformed into a canvas of pastel hues, with delicate shades of pink, purple, and orange blending seamlessly. This ethereal light illuminated the snow-capped peaks of the Tien Shan mountains, creating a stark contrast with the urban landscape below.' },
    { id: 9, title: 'Ocean', url: '/images/Ocean.jpg', description: 'This photograph captures the endless expanse of the ocean, where the horizon meets the sky in a seamless union of blue hues. The gentle waves create rhythmic patterns, reflecting the sunlight like scattered diamonds on the water\'s surface. Seabirds glide gracefully overhead, their calls blending with the soothing sound of the surf. The scene evokes a sense of tranquility and vastness, reminding us of the ocean\'s timeless allure and its role as a source of inspiration and wonder.' },
    { id: 10, title: 'Lion', url: '/images/Lion.jpg', description: 'In the golden savannah under the African sun, a majestic lion rests upon a weathered rock, its mane a testament to strength and pride. The warm hues of the landscape echo the lion’s own regal presence, blending earthy browns and sunlit golds. With a watchful gaze, it embodies a timeless symbol of courage and resilience, a reminder of nature’s raw beauty and the untamed spirit that roams the wild plains.' },
    { id: 11, title: 'Sand', url: '/images/Sand.jpg', description: 'Endless dunes stretch under the blazing desert sun, sculpted by the wind into intricate patterns that shift with each passing breeze. The sand, a palette of warm ochres and golden hues, sparkles like a sea of tiny crystals under the clear blue sky. This majestic landscape embodies the timeless beauty and serenity of the desert, where silence reigns and the boundless expanse invites contemplation.' },
    { id: 12, title: 'Jungle', url: '/images/Jungle.jpg', description: 'Deep within the heart of the lush jungle, towering trees form a verdant canopy that filters sunlight into dappled patterns on the forest floor. The air is alive with the calls of exotic birds and the rustling of unseen wildlife. Vines twist and snake their way around ancient tree trunks, while vibrant foliage in every shade of green creates a tapestry of life and growth. This majestic jungle landscape is a testament to the raw power and beauty of nature.' },
    { id: 13, title: 'Roses', url: '/images/Roses.jpg', description: 'In a secluded garden, a profusion of roses bursts into bloom, their petals unfurling like delicate satin under the gentle caress of the morning dew. Each blossom carries a unique hue, from the deepest crimson to the palest blush, filling the air with a heady fragrance that lingers like a whispered promise. This majestic display of roses, nurtured by tender care and love, is a celebration of nature\'s artistry and the timeless elegance of these beloved flowers.' },
    { id: 14, title: 'Peonies', url: '/images/Peonies.jpg', description: 'Amidst a tranquil garden, clusters of peonies bloom in a riot of colors, their lush petals unfurling like delicate silk in the soft morning light. Each blossom is a masterpiece of nature\'s design, from the deepest magenta to the palest blush, their fragrance lingering in the air like a gentle sigh. This majestic display of peonies is a testament to grace and beauty, evoking a sense of serenity and admiration for the ephemeral wonders of the floral world.' },
    { id: 15, title: 'Lilac', url: '/images/Lilac.jpg', description: 'In a sun-kissed garden corner, lilac bushes sway gently in the breeze, their delicate clusters of blossoms casting a subtle perfume that fills the air. Each flower boasts hues ranging from pale lavender to deep violet, creating a tapestry of color against the verdant backdrop. This majestic lilac scene evokes memories of springtime and renewal, capturing the essence of purity and tranquility that these beloved flowers bring to the landscape.' },
    { id: 16, title: 'daisies', url: '/images/daisies.jpg', description: 'Amidst a verdant meadow, daisies bloom in clusters of pristine white and yellow, their delicate petals catching the morning dew. Each flower faces the sun, their bright centers like tiny suns themselves, radiating warmth and cheer. This majestic daisy field is a testament to nature\'s simplicity and beauty, evoking feelings of joy and nostalgia for carefree days spent in the embrace of nature.' },
    { id: 17, title: 'butterfly', url: '/images/butterfly.jpg', description: 'A majestic butterfly flits gracefully among a garden of vibrant blooms, its delicate wings adorned with intricate patterns of iridescent colors. With each gentle flutter, it brings a sense of wonder and enchantment to the scene, a fleeting glimpse of nature\'s artistry in motion. This butterfly\'s dance through the air captivates the imagination, embodying the beauty and grace of the natural world.' },
    { id: 18, title: 'Eagle', url: '/images/Eagle.jpg', description: 'High above the rugged landscape, an eagle soars with majestic grace. Its keen eyes scan the terrain below, ever watchful for prey. Each powerful beat of its wings propels it effortlessly through the boundless sky, embodying strength and freedom. The eagles regal presence commands respect, symbolizing resilience and the untamed spirit of the wilderness.' },
    { id: 19, title: 'Dog', url: '/images/Dog.jpg', description: 'With loyal eyes and a playful spirit, this dog embodies companionship and joy. Its fur glistens under the warm sunlight, a testament to the bond between humans and animals. Whether bounding through fields or resting by a hearth, the dogs presence brings warmth and happiness to those around it. This image captures a moment of friendship and love, celebrating the enduring bond between humans and their faithful canine companions.' },
    { id: 20, title: 'Jaguar', url: '/images/Jaguar.jpg', description: 'The mighty jaguar lurks amidst dense tropical foliage. Its muscular body and sharp eyes reflect strength and predatory grace. It embodies the wild spirit of the jungle, epitomizing the power and mystery of this impenetrable realm. The jaguars bright yellow coat contrasts with the deep green of the foliage, creating a stunning portrayal of the interaction between predator and environment.' },
    { id: 21, title: 'Rhinos', url: '/images/Rhinos.jpg', description: 'Massive rhinos plod through the savanna, embodying strength and resilience. Their hefty horns and protective armor make them stand out in nature, symbolizing toughness and survival. Rhinos play a crucial role in the ecosystem, representing stability and balance in the wild. Their presence reminds us of the importance of conserving these animals and their habitats.' },
    { id: 22, title: 'Little tiger', url: '/images/Little tiger.jpg', description: 'The young tiger cub, with its vibrant orange coat and curious eyes, embodies innocence and playfulness. Exploring its natural habitat, the cub learns the skills it will need to survive as an apex predator. Its stripes provide camouflage among the tall grasses, showcasing the beauty of nature’s design..' },
    { id: 23, title: 'Hummingbird', url: '/images/Hummingbird.jpg', description: 'The hummingbird, with its iridescent feathers and rapid wingbeats, hovers gracefully near vibrant flowers. Its delicate size belies its incredible agility and speed, allowing it to sip nectar with precision. The shimmering colors of its plumage reflect the sunlight, creating a dazzling display of nature’s artistry..' },
    { id: 24, title: 'sunflowers', url: '/images/sunflowers.jpg', description: 'Standing tall in a golden field, these sunflowers turn their faces towards the warm sun. Each petal reflects the sun’s rays, creating a mesmerizing glow across the vast landscape. With their vibrant yellow petals and dark centers, they symbolize vitality, happiness, and the beauty of a sunny day.' },
    { id: 25, title: 'Lily', url: '/images/Lily.jpg', description: 'Elegant and serene, the lily floats gracefully upon still waters. Its delicate petals, often white or pastel-colored, contrast with the deep green of the leaves. Embracing the purity of water, the lily symbolizes renewal and rebirth, offering a peaceful retreat amidst nature’s tranquil beauty.' },
    { id: 26, title: 'White roses', url: '/images/White roses.jpg', description: 'Soft and pure, white roses bloom in a serene garden. Each delicate petal unfolds gracefully, revealing layers of beauty and fragrance. These roses symbolize purity, innocence, and new beginnings, creating an atmosphere of peace and tranquility in their presence..' },
    { id: 27, title: 'cherry blossoms', url: '/images/cherry blossoms.jpg', description: 'Under the soft spring sky, cherry blossoms paint the landscape in shades of delicate pink and white. These ephemeral flowers symbolize the beauty of life’s fleeting moments and the renewal of nature. Their gentle fragrance and exquisite petals inspire awe and admiration, creating a serene ambiance wherever they bloom.' },
];

const initialReviews = [
    { id: 1, username: 'Alice', rating: 4, comment: 'Beautiful photo!' },
    { id: 2, username: 'Bob', rating: 5, comment: 'Absolutely stunning!' },
];

const PhotoDetail = ({ isLoggedIn, user }) => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(initialReviews);
    const [editReviewId, setEditReviewId] = useState(null);
    const [editComment, setEditComment] = useState('');
    const photo = photos.find(p => p.id === parseInt(id));

    const addReview = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newReview = {
            id: reviews.length + 1,
            username: user.username,
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment'),
        };
        setReviews([...reviews, newReview]);
        event.target.reset();
    };

    const handleEditClick = (review) => {
        setEditReviewId(review.id);
        setEditComment(review.comment);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        setReviews(reviews.map(review =>
            review.id === editReviewId ? { ...review, comment: editComment } : review
        ));
        setEditReviewId(null);
        setEditComment('');
    };

    const handleDelete = (reviewId) => {
        setReviews(reviews.filter(review => review.id !== reviewId));
    };

    return (
        <div>
            <Navbar />
            <main>
                {photo ? (
                    <div style={{ textAlign: 'center' }}>
                        <h1>{photo.title}</h1>
                        <img src={photo.url} alt={photo.title} style={{ maxWidth: '600px', height: 'auto' }} />
                        <div className="photo-description">
                            <p>{photo.description}</p>
                        </div>
                        <h2>Reviews</h2>
                        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                            {reviews.map(review => (
                                <div key={review.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                                    <strong>{review.username}</strong> rated it {review.rating}/5<br />
                                    {review.comment}
                                    {isLoggedIn && review.username === user.username && (
                                        <>
                                            <button onClick={() => handleEditClick(review)}>Edit</button>
                                            <button onClick={() => handleDelete(review.id)}>Delete</button>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        {isLoggedIn ? (
                            <div>
                                <h3>{editReviewId ? 'Edit Review' : 'Add a Review'}</h3>
                                <form onSubmit={editReviewId ? handleEditSubmit : addReview}>
                                    <label htmlFor="rating">Rating (1-5):</label><br />
                                    <input type="number" id="rating" name="rating" min="1" max="5" required /><br /><br />
                                    <label htmlFor="comment">Comment:</label><br />
                                    <textarea id="comment" name="comment" rows="4" value={editComment} onChange={(e) => setEditComment(e.target.value)} required /><br /><br />
                                    <button type="submit">{editReviewId ? 'Update' : 'Submit'}</button>
                                </form>
                            </div>
                        ) : (
                            <p>Please log in to add a review.</p>
                        )}
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
