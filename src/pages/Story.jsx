import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import Slider from '../components/Slider'; 
import Timeline from '../components/Timeline';
import Tributes from '../components/Tributes';
import Gallery from '../components/Gallery';
import Footer from '../navigation/Footer';
import './Story.css';
import heroImage from '../assets/zakithi.gif';
  
export default function Home() {
const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
});

  return (
    <div className="home">
      <div className="story__content">
        <div
        
         className="center">
          <h1 className="story__heading">
            Michael & Zakithi
          </h1>
          <img className="story_image" src={heroImage} alt="Wedding" />
          <p>Save the date</p>             
        </div>
      </div>

      <div className="story_container">
        <div className="subheading">A love story</div>
        <div className="secondary_heading"><h1>Michael & Zakithi&apos;s Wedding</h1></div>
        <div className="secondary_content">
            <p>Our love story has been a beautiful journey, filled with joy, laughter, and unwavering support. From the moment we met, we knew we were meant to be. Each day together has strengthened our bond and deepened our connection.</p>
            <p>We are excited to share this special day with you, celebrating a love that continues to grow and inspire. Our hearts are full, and we look forward to creating unforgettable memories with all of you.</p>
        </div>
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x:0} : {}}
        transition={{ duration: 0.8, ease: 'easeIn' }}
        className="image-grid">
            <img src="https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding Image 1" />
            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding Image 2" />
            <img src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding Image 3" />
        </motion.div>
    </div>
<Slider />
<Timeline />
<Tributes />
<Gallery />
<Footer />
    </div> 
  );
}
