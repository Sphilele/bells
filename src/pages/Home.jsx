import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timer from '../components/Timer';
import About from '../components/About';
 import Highlights from '../components/Highlights';
 import Video from '../components/video';
 import Map from '../components/Map';
 import Wishes from '../Forms/Wishes';
 import Accordion from '../components/Accordion';
 import Footer from '../navigation/Footer';
import './Home.css'

export default function Home() {
  const { ref, inView} = useInView({
    triggerOnce: true,
    treshold: 0.1,
  });

    return (
    
        <div className="hero-container">
            <img src="https://images.pexels.com/photos/1640056/pexels-photo-1640056.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="couple" className="hero-img"/>
              <motion.div
             
               ref={ref}
               initial={{ opacity: 0, x: 100 }}
               animate={inView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, ease: 'easeIn' }}
                 className="hero-text"
               >
              <h3>Our Journey Begins</h3>
            <p>From the first glance to a lifetime of love, our story is just beginning. We are excited to write the next chapter with you by our side.</p>
            <button className="hero-btn">
    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Join us</Link>
  </button>       
  </motion.div>
  <div className="hero-text-top">
    <h2>Join us in celebrating love</h2>
    <p>Filled with love & joy</p> 
  </div>
  <Timer />
  <div>
  <About />
  <Highlights />
  <Video />
  <Map />
  <Wishes />
  <Accordion />
<Footer />
  </div>
 
        </div>
    

        
      
       
        
    )
}