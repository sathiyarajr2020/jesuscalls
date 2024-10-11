import React from 'react';
import './Promise.css';
import PromiseImage1 from '../assets/promise1.png';
import PromiseImage2 from '../assets/promise2.png';

const Promises: React.FC = () => {
  return (
    <div className="promises-container">
      <div className="promise-card">
        <img 
          src={PromiseImage1} 
          alt="Today's Promise" 
          className="promise-image" 
        />
        <h2>Today's Promise</h2>
        <p>Trusting in God with complete faith brings down His power and deliverance in your life, as seen in King David's life...</p>
        <div className="language-options">
          <button>தமிழ்</button>
          <button>हिंदी</button>
          <button>తెలుగు</button>
          <button>മലയാളം</button>
          <button>Read More & Watch</button>
        </div>
      </div>

      <div className="promise-card">
        <img 
          src={PromiseImage2} 
          alt="Monthly Promise" 
          className="promise-image" 
        />
        <h2>Monthly Promise</h2>
        <p>God is going to raise you to great heights and display His power in your life so that His name might be glorified before all...</p>
        <div className="language-options">
          <button>தமிழ்</button>
          <button>हिंदी</button>
          <button>తెలుగు</button>
          <button>മലയാളം</button>
          <button>Read More & Watch</button>
        </div>
      </div>
    </div>
  );
}

export default Promises;
