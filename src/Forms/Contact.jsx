import './Contact.css';
import { Link } from 'react-router-dom';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";



export default function Contact() {
    return (
        <div className='contact-container'>
            <h2 className='contact-headline'>Contact Us</h2>
            <div className='content-wrapper'>
                <hr className='hr-line'/>
                <div className='contact-icons'>
                    <div className='icon-item'>
                        <Link to='/chat'>
                        <IoChatboxEllipsesOutline className='icon'/>   
                        </Link>            
                        <h3 className='contact-subheader'>Chat with us</h3>
                        <span className='contact-span-1'>We are online 24/7</span>
                        <span className='contact-span-2'>Click to start chatting</span>
                        
                    </div>

                    <div className='icon-item'>
                    <a href="tel:+1234567890" className="icon-item">
                        <IoIosPhonePortrait className='icon'/>
                        <h3 className='contact-subheader'>Call Us</h3>
                        <span className='contact-span-1'>079 593 0890</span>
                        <span className='contact-span-2'>Mon-Fri 9am-6pm</span>
                        </a>
                    </div>

                     <div className='icon-item'>
                    <a 
                    href="https://www.google.com/maps/place/House+of+Treasures+Ministries+Johannesburg/@-26.3234791,28.0181194,13z/data=!3m1!4b1!4m6!3m5!1s0x1e9505d790589e4f:0x9377c0850421a8f0!8m2!3d-26.3234791!4d28.0181194!16s%2Fg%2F11c7k3g1s6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="icon-link">
                    <SlLocationPin className="icon" />
                </a>
                        <h3 className='contact-subheader'>Visit Us</h3>
                        <span className='contact-span-1'>123 Main Street</span>
                        <span className='contact-span-2'>City, State, ZIP</span>
                    </div> 
                </div>
            </div>
            <div className="button-container">
            <button className="contact-btn">
                <Link to="/">Home</Link>
            </button>
        </div>

        </div>
     
    )
}

