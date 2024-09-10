import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";



export default function Footer() {
  return (

    <footer className="bg-yellow py-12 text-black-400 margin-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 mb-6">
        <h6 className="text-grey text-lg uppercase mb-2 tracking-wider font-heading">About</h6>
        <p className="text-justify pl-0 mr-2 font-content text-grey">
        This site has been thoughtfully designed to celebrate the special union of Michael & Zakithi. Every detail has been crafted with care to ensure a flawless experience. If you’re inspired by this design, I can help you create something similar, tailored to your own unique celebration. Explore the site, and thank you for being part of their beautiful journey!
        </p>
      </div>

       <div className="w-1/2 md:w-1/4 mb-8"> 
  <h6 className="text-grey text-lg uppercase mb-2 tracking-wider ml-6 font-heading">Categories</h6>
  <ul className="list-none pl-0 ml-6">
    <li className="text-grey hover:text-black-600 font-content">Profile</li>
    <li className="text-grey hover:text-black-600 font-content">About the couple</li>
    <li className="text-grey hover:text-black-600 font-content">Location</li>
    <li className="text-grey hover:text-black-600 font-content">Wishes form</li>
    <li className="text-grey hover:text-grey font-content">Gallery</li>
  </ul>
</div> 



      <div className="w-1/2 md:w-1/4 mb-6 pl-0">
        <h6 className="text-grey text-lg uppercase mb-2 tracking-wider font-heading">Quick Links</h6>
        <ul className="list-none pl-0">
          <li><Link to="/story" className="text-grey hover:text-seagreen font-content">About Us</Link></li>
          <li><Link to="/contact" className="text-grey hover:text-seagreen font-content">Contact Us</Link></li>
          <li><Link to="/login" className="text-grey hover:text-seagreen font-content">Login</Link></li>
          <li><Link to="/quiz" className="text-grey hover:text-seagreen font-content">Quiz</Link></li>
          <li><Link to="/signup" className="text-grey hover:text-seagreen font-content">Signup</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="container mx-auto px-4 mt-8">
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 mb-6 text-center md:text-left">
        <p className="text-grey font-content">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved by 
          <a href="#" className="text-grey-600 hover:text-black-800 font-content"> Sphilele</a>.
        </p>
      </div>
    
      <div className="w-full md:w-1/3 mb-6 text-center md:text-right">
        <ul className="list-none flex justify-center md:justify-end space-x-4">
          <li><a href="#" className="bg-gray-700 text-gray-400 hover:bg-seagreen hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"><FaFacebook /></a></li>
          <li><a href="#" className="bg-gray-700 text-gray-400 hover:bg-seagreen hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"><FaSquareXTwitter /></a></li>
          <li><a href="#" className="bg-gray-700 text-gray-400 hover:bg-seagreen hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"><IoLogoTiktok /></a></li>
          <li><a href="#" className="bg-gray-700 text-gray-400 hover:bg-seagreen hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"><FaInstagramSquare /></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}
