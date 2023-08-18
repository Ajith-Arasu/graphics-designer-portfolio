import Link from 'next/link';
import React, { useState } from 'react';

const AboutMe = () => {
  const skillSet = [
    {
      'skill': 'vectorize',
      'link':'vectorize',
      'description': 'Skill in vectorizing graphics, which involves converting raster images into scalable vector graphics (SVG) that can be resized without losing quality. Proficient in using vector graphic software such as Adobe Illustrator or CorelDRAW.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ff0000}</style><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>'
    },
    {
      'skill': 'color separation',
      'link':'color-seperation',
      'description': 'Ability to separate colors in graphics, an essential technique used in printing and design. Proficient in using software tools to isolate different color channels and create separate color layers for accurate printing results.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ff0000}</style><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>'
    },
    {
      'skill': 'Background removal',
      'link':'background-removal',
      'description': 'Experience in removing backgrounds from images to create clean and transparent cutouts. Skilled in using techniques like layer masking, pen tool, or specialized software like Adobe Photoshop to achieve precise and professional results.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#ff0000}</style><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>'
    },
    {
      'skill': 'clipping path, Hair masking',
      'link':'clipping-path',
      'description': 'Knowledge of using clipping paths in design to create precise cutouts and isolate specific elements in an image. Proficient in using tools like the pen tool in Adobe Photoshop to create clipping paths with smooth and accurate curves.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#ff0000}</style><path d="M296 136V88h48v48H296zM288 32c-26.5 0-48 21.5-48 48v4H121.6C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36h66.9c-58.9 39.6-98.9 105-104 180H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-3.3c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1h64c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1H496c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-4.5c-5-75-45.1-140.4-104-180h66.9c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36H400V80c0-26.5-21.5-48-48-48H288zM88 376h48v48H88V376zm416 48V376h48v48H504z"/></svg>'
    },
    {
      'skill': 'Ghost mannequin',
      'link':'ghost-mannequin',
      'description': 'Experience in using ghost mannequins in photography to create a hollow man effect, commonly used for displaying clothing items. Knowledgeable in the process of photographing products with mannequins and later retouching the images to remove the mannequin and achieve a clean, professional look.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#ff0000}</style><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/></svg>'
      
    },
    {
      'skill': 'Retouch',
      'link':'retouch',
      'description': 'Ability to retouch images and photos to enhance their visual appearance. Proficient in using various retouching techniques, such as skin smoothing, blemish removal, and color adjustments, to produce polished and visually appealing results.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#ff0000}</style><path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/></svg>'
      
    },
    {
      'skill': 'Color changes',
      'link':'color-changes',
      'description': 'Skill in making color changes to graphics, allowing for customization and variations. Proficient in adjusting colors, hues, and tones using software tools like Adobe Photoshop to achieve the desired look and feel.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ff0000}</style><path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z"/></svg>'
    },
    {
      'skill': 'Mockup',
      'link':'mock-up',
      'description': 'Experience in creating mockups for designs, providing a realistic preview of how the final product will look. Proficient in using mockup templates or 3D rendering software to showcase designs in various contexts, such as product packaging or digital interfaces.',
      'icon':'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#ff0000}</style><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>'
    },
  ];
  

  // Initialize state to keep track of which panels are expanded
 // const [expandedPanels, setExpandedPanels] = useState([]);

  // Function to toggle the panel's visibility
  // const togglePanel = (index) => {
  //   if (expandedPanels.includes(index)) {
  //     setExpandedPanels(expandedPanels.filter((item) => item !== index));
  //   } else {
  //     setExpandedPanels([...expandedPanels, index]);
  //   }
  // };

  return (
    <div className="skill-container" id="skills">
      <div>
        <h2 className="skill-section-title">My Skills</h2>
      </div>
      <div className="skill-content">
        {skillSet.map((item, index) => {
           return (
            <Link className="skill-item" href={item.link}>
            <div className="accordian-item" key={index}>
              <div className="accordion">
                <div className="accordion-left">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  {item.skill}
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export
default AboutMe;

