import React, { useState } from "react";
import demo2 from "../Assets/tvc.jpg";
import './Testimonies.css';

interface Testimonial {
  name: string;
  location: string;
  content: string;
  fullContent: string; // Add full content for the popup
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shikha",
    location: "Haryana",
    content: "My husband's name is Dheeraj Singh. We got married four years ago, but we were unable to have a child...",
    fullContent: "My husband's name is Dheeraj Singh. We got married four years ago, but we were unable to have a child. Despite consulting many doctors, no one could determine the cause or provide a cure. But we didn't give up and continued to pray and even visited the Jesus Calls National Prayer Tower. Here, the prayer intercessors prayed for us with great burden. Then we enrolled ourselves in the Family Blessing Plan, and in faith, I also registered my unborn baby in the Young Partners Plan, believing God for a supernatural miracle. After a few months, the Lord graciously answered our prayers, and I conceived.",
    image: demo2,
  },
  {
    name: "S. Nisha Veronica",
    location: "Chennai",
    content: "I am a young partner in Jesus Calls Ministry. During my 11th and 12th grades, I struggled to keep up with my academics...",
    fullContent: "I am a young partner in Jesus Calls Ministry. During my 11th and 12th grades, I struggled to keep up with my academics and often contacted the Jesus Calls prayer helpline for support. In one conversation with a prayer intercessor, he mentioned that God would use me to comfort people and uplift the broken-hearted in the future. He prophetically prayed for me with the exact prayers that I had been praying in my personal devotions, even though I hadn't shared these prayers with him. Eventually, I scored 632/720 in NEET 2022 and am currently pursuing an MBBS in CMC Vellore. I would like to express my gratitude to all the prayer intercessors. All glory and praise to God for His goodness.",
    image: demo2,
  },
];

const TestimonialsSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<Testimonial | null>(null); // Update to hold the whole testimonial object

  const handleClick = (testimonial: Testimonial) => {
    setPopupContent(testimonial);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="testimonials-section">
      <h2>Testimonies</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-box"
            onClick={() => handleClick(testimonial)}
          >
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-details">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.location}</span>
                <p>{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Container */}
      {showPopup && popupContent && (
        <div className="popup-container" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing the popup on clicking its content */}
            <span className="close-symbol" onClick={closePopup}>&times;</span> {/* Close symbol */}
            <img src={popupContent.image} alt={popupContent.name} className="popup-image" />
            <h3>{popupContent.name}</h3>
            <span>{popupContent.location}</span>
            <p>{popupContent.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;
