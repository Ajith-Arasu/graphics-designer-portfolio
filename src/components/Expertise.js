// components/Expertise.js
import React from 'react';

const Expertise = () => {
  return (
    <div className="expertise-container" id="expertise">
            <div><h2 className="expertise-section-title">Expertise</h2></div>
            <div className="expertise-content">
               <div className="expertise-card">
                 <img className="img back-img" src="./images/ps-logo.png" alt="photo-shop" />
               </div>
               <div className="expertise-card">
                 <img className="img back-img" src="./images/ai-logo.png" alt="photo-shop" />
               </div>
            </div>
    </div>
  );
};

export default Expertise;
