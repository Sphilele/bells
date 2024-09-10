import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Highlights.css';

export default function Highlights() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '-100px 0px',
    });

    return (
        <motion.section 
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeIn' }}
        className="highlights-section">
            <h2>Highlights</h2>
            <h3>Milestones through the years</h3>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="highlight-item"
            >
                <img src="https://images.pexels.com/photos/17697811/pexels-photo-17697811/free-photo-of-view-of-a-motorboat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="The Covered Bridge" className="highlight-image" />
                <div className="highlight-content">
                    <h4>THE first glance</h4>
                    <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link to="/story" className="learn-more-btn">Learn More</Link>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="highlight-item"
            >
                <img src="https://images.pexels.com/photos/8330846/pexels-photo-8330846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="The Lodging" className="highlight-image" />
                <div className="highlight-content">
                    <h4>The meeting</h4>
                    <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link to="/story" className="learn-more-btn">Learn More</Link>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="highlight-item"
            >
                <img src="https://images.pexels.com/photos/24778766/pexels-photo-24778766/free-photo-of-scenic-view-of-mountains-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="The Octagon" className="highlight-image" />
                <div className="highlight-content">
                    <h4>The devotion</h4>
                    <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link to="/story" className="learn-more-btn">Learn More</Link>
                </div>
            </motion.div>
        </motion.section>
    );
}
