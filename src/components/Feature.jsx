import { useState } from 'react';
import Navigation from './Navigation';
import './Feature.css';

// Array of background images (using placeholder URLs - replace with actual images)
const backgroundImages = [
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
];

export default function Feature() {
  const [currentBg] = useState(() => Math.floor(Math.random() * backgroundImages.length));

  return (
    <section
      className="feature"
      style={{
        backgroundImage: `url(${backgroundImages[currentBg]})`,
      }}
    >
      <Navigation transparent />

      {/* Overlay for readability */}
      <div className="feature__overlay" />

      {/* Hero Content */}
      <div className="feature__content">
        <div className="feature__text">
          <h1 className="feature__heading">
            <span className="feature__line">We Create</span>
            <span className="feature__line">
              Category{' '}
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&crop=center"
                alt="Category Icon"
                className="feature__inline-image"
              />{' '}
              Leaders
            </span>
          </h1>
          <p className="feature__subtext">on every searchable platform</p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="feature__bottom">
        <div className="feature__bottom-left">
          <p className="feature__description">
            We help brands dominate search results across all platforms through strategic content creation and optimization.
          </p>
        </div>
        <div className="feature__bottom-right">
          <p className="feature__info">4 Global Offices • 50+ Experts • 200+ Projects</p>
        </div>
      </div>
    </section>
  );
}
