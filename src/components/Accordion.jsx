import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div
        className={`flex justify-between items-center p-4 bg-green-500 text-black cursor-pointer transition-colors duration-300 ${
          isOpen ? 'bg-green-700' : ''
        }`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? (
          <FaMinus className="h-5 w-5 text-seagreen transition-transform duration-300" />
        ) : (
          <FaPlus className="h-5 w-5 text-seagreen transition-transform duration-300" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: contentHeight }}
        ref={contentRef}
      >
        <div className="bg-gray-100 p-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Accordion = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl text-center mb-8 font-heading">FAQs</h1>
      <div className="max-w-2xl mx-auto font-content">
        <AccordionItem title="What time does the ceremony start?">
          <p>
          The ceremony will begin at 11:00 AM. We recommend arriving 15-20 minutes early to find seating and settle in.
          </p>
          <p>
           Another ceremony will be held in Joburg. All details are found in the emails sent to our guests.
          </p>
        </AccordionItem>
        
        <AccordionItem title="Is there a dress code for the wedding?">
          <p>
          Yes, the dress code is semi-formal. Ladies are encouraged to wear cocktail dresses or elegant attire, while gentlemen are encouraged to wear suits or dressy casual wear.
          </p>
          <p>
            You can use the site to navigate about the dress code and more information.
          </p>
        </AccordionItem>
        <AccordionItem title=" Will transportation be provided from the hotel to the venue?">
          <p>
          Yes, we will have a shuttle service available from the hotel to the venue. The shuttle will depart at 10:30 AM, so please be ready in the hotel lobby by that time.
          </p>
          <p>
            Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula.
          </p>
        </AccordionItem>
        <AccordionItem title="Are children allowed at the wedding?">
          <p>
          We love children, but this will be an adults-only celebration. We hope you can enjoy the evening with us!
          </p>
          <p>
            Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula.
          </p>
        </AccordionItem>
        <AccordionItem title="Who are the Bridesmaids & Grooms">
          <p>
          Please RSVP through the form provided on this website. You can also contact us directly via email if you have any issues. We kindly ask that you RSVP by [RSVP Deadline Date].
          </p>
          <p>
            You can find out about our beautiful bridesmaids and grooms.
            <Link to='/brides'>here</Link>
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Accordion;
