
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function Wedding() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <motion.div
      className="content-container"
      ref={ref} 
      initial={{ opacity: 0, y: 100 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    >
      <div className="text-block">
        <h2>About Us</h2>
        <h1>WHERE TRUE LOVE MEETS ETERNAL ROMANCE</h1>
        <p>
        In the vibrant city of Johannesburg, Michael & Zakithi have found their forever love, a bond that shines as brightly as their journey together. Their story is one of laughter, deep connection, and unwavering support. Together, they have built a life filled with joy, adventure, and shared dreams. Their love is a beautiful testament to the magic of finding your perfect match and cherishing every moment along the way. As they step into this new chapter, their commitment to one another continues to inspire and warm the hearts of all who know them.
        </p>
        <Link to='/story'>
          <button className="read-more-btn">Read More</button>
        </Link>
      </div>

      <div className="image-block">
        <img 
          src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="image 1" 
          className="image-left" 
        />
        <img 
          src="https://images.pexels.com/photos/27457216/pexels-photo-27457216/free-photo-of-a-woman-in-a-long-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="image 2" 
          className="image-right" 
        />
       
      </div> 

    </motion.div>
  );
}
