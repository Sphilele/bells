import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Wishes() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newWish = { name, wish };
    
    try {
      const response = await fetch('http://localhost:8080/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWish),
      });
      
      if (response.ok) {
        const savedWish = await response.json();
        setWishes([...wishes, savedWish]);
        setName('');
        setWish('');
      } else {
        console.error('Failed to submit wish');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Your Wishes</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            style={styles.textarea}
            placeholder="Your wishes here"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button style={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
      
      <div style={styles.carouselContainer}>
        {wishes.length > 0 ? (
          <Slider {...settings}>
            {wishes.map((wish, index) => (
              <div key={index} style={styles.wishItem}>
                <p style={styles.userName}>{wish.name}</p>
                <p style={styles.wishMessage}>{wish.wish}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No wishes yet. Be the first to submit!</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  carouselContainer: {
    padding: '20px',
  },
  wishItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  wishMessage: {
    fontSize: '1rem',
  },
};

export default Wishes;
