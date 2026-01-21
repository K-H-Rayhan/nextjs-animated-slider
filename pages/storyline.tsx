import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import storyContent from '../public/data/storyContentKeris.json';

const backgroundImages = [
    '/1.png',
    '/2.png',
    '/3.png',
  ];  

const Storyline = () => {
  const [currentBgImage, setCurrentBgImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const imageIndex = Math.min(
        Math.floor(scrollPosition / windowHeight),
        backgroundImages.length - 1
      );
      setCurrentBgImage(backgroundImages[imageIndex]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div
        className="storyline-container"
        style={{
          paddingTop: '100px',
          backgroundImage: `url(${currentBgImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className="storyline-title">Assassin's Creed - Keris</h1>
        {storyContent.map((paragraph, index) => (
          <p key={index} className="storyline-content">{paragraph}</p>
        ))}
      </div>
      <style jsx>{`
        .storyline-container {
            paddingTop: 100px;
            padding: 20px;
            max-width: 800px;
            margin: auto;
            background-color: #f5f5f5; 
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
            background-image: url('/path/to/your/background.jpg'); 
            background-size: cover; 
            background-position: center; 
            background-attachment: fixed;
          }          

        .storyline-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
          color: #fff;
        }

        .storyline-content {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: justify;
          background: rgba(255, 255, 255, 0.8);
          padding: 15px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .storyline-container {
            padding: 15px;
        }
        `}</style>
      </>
  );
    };      
    export default Storyline;