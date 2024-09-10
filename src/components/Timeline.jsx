import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const Timeline = () => {
    const{ ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">A Story with a Legacy of Love</h1>
      <div className="timeline-cards">
        <div className="timeline-card">
          <div className="year-badge">2015</div>
          <h2>A Journey Through Time</h2>
          <p>
          Our love story began with a chance meeting that blossomed into a lifelong commitment. As our relationship grew, so did our dreams and aspirations. From our first date to this momentous day, each step has been a testament to our deep connection. Today, we celebrate not just our union but the beautiful journey that brought us here, surrounded by the love and support of those who mean the most to us.
          </p>
        </div>
        <div className="timeline-card">
          <div className="year-badge">2018</div>
          <h2>A Love Story Unfolds</h2>
          <p>
          As we continued from a simple spark that quickly grew into a profound connection that has shaped our lives. Each shared experience, from everyday moments to grand adventures, has woven a rich tapestry of love and commitment. As we celebrate our wedding, we honor the journey that has brought us together and look forward to the new chapters we&apos;ll write as partners.
          </p>
        </div>
        <div className="timeline-card">
          <div className="year-badge">2023</div>
          <h2>Embracing the Future</h2>
          <p>
          As we step into this new chapter of our lives, we are filled with excitement and hope for the future. Together, we look forward to building a life rich with shared dreams, adventures, and endless possibilities. Our commitment to each other is a promise to cherish every moment, support one another through every challenge, and celebrate the joy of a future filled with love and togetherness.
          </p>
        </div>
      </div>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{ duration: 0.9, ease:'easeIn' }}

       className="timeline-grid">
        <img src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Grist Mill" />
        <img src="https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding" />
      </motion.div>
    </div>
  );
};

export default Timeline;

