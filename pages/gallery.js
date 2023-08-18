// pages/index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import ImageGallery from '../src/components/imageGallery'

const Gallery = () => {
  let set1={
    before:"https://www.dropbox.com/s/tdsrvvngq73cqex/before.jpg?raw=1",
    after:"https://www.dropbox.com/s/vytawj8zjwfavb2/after.jpg?raw=1"
}

  return (
    <div>
      {/* Render the Header component here */}
      <ImageGallery Images={...set1}/>
      {/* Add other components or content here */}
    </div>
  );
};

export default Gallery;
