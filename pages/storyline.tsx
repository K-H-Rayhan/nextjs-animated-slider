import React from 'react';
import Header from '../components/Header';
import storyContent from '../public/data/storyContentKeris.json'; // Make sure this path is correct

const Storyline = () => {
  return (
    <>
      <Header />
      <div className="storyline-container" style={{ paddingTop: '70px' }}>
        <h1 className="storyline-title">Assassin's Creed - Keris</h1>
        {storyContent.map((paragraph, index) => (
          <p key={index} className="storyline-content">{paragraph}</p>
        ))}
      </div>
      <style jsx>{`
        .storyline-container {
          padding: 20px;
          max-width: 800px;
          margin: auto;
          background-color: #f5f5f5; /* Adjust the background color as needed */
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the box-shadow as needed */
        }

        .storyline-title {
          font-size: 2rem; /* Adjust the font size as needed */
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .storyline-content {
          font-size: 1rem; /* Adjust the font size as needed */
          line-height: 1.6; /* Adjust the line height for readability */
          margin-bottom: 1.5rem; /* This adds space between paragraphs */
          text-align: justify;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .storyline-container {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Storyline;
``
