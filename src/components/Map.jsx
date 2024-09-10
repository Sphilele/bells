import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

export default function Map() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#f7f7f7',
      }}
    >
      <div
        style={{
          width: '100%',
          marginBottom: '2rem',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0932728622674!2d28.018119374743474!3d-26.3234790688411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9505d790589e4f%3A0x9377c0850421a8f0!2sHouse%20of%20Treasures%20Ministries%20Johannesburg!5e0!3m2!1sen!2sza!4v1724318138689!5m2!1sen!2sza"
          width="100%"
          height="450"
          style={{ border: '0', borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          opacity: 1,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaLocationDot
            style={{ fontSize: '2rem', color: '#222', marginRight: '1rem' }}
          />
          <a
            href="https://www.google.com/maps/place/House+of+Treasures+Ministries+Johannesburg/@-26.323479,28.018119,17z/data=!3m1!4b1!4m5!3m4!1s0x1e9505d790589e4f:0x9377c0850421a8f0!8m2!3d-26.323479!4d28.018119"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#000' 
            }}
          >
            House of Treasures Ministries, Johannesburg
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MdDateRange
            style={{ fontSize: '2rem', color: '#222', marginRight: '1rem' }}
          />
          <span>Saturday, October 5, 2024</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoTime
            style={{ fontSize: '2rem', color: '#222', marginRight: '1rem' }}
          />
          <span>8:30 AM - 11:00 AM</span>
        </div>
      </div>
    </div>
  );
}
