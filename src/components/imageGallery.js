import React, { useState ,useEffect } from 'react';

const ImageComparison = (Images) => {
  const [sliderValue, setSliderValue] = useState(50);
  useEffect(() => {
    const slider = document.getElementById("slider");
    const handleSliderChange = () => {
      setSliderValue(slider.value)
      const frontImage = document.querySelector(".front-img");
      frontImage.style.clipPath = `polygon(0 0, ${slider.value}% 0, ${slider.value}% 100%, 0% 100%)`;
    };

    slider.addEventListener("input", handleSliderChange);
    return () => {
      slider.removeEventListener("input", handleSliderChange);
    };
  }, []);
  const {before,after}= Images.Images;
  return (
    <div className='gallery-container'>
    <section className="before-after">
    <img className="img back-img" src={before} alt="before" />
    <img className="img front-img" src={after} alt="after" />
    <input type="range" min="1" max="100" value={sliderValue} className="slider" name="slider" id="slider" />
    </section>
    </div>
  );
};

export default ImageComparison;
