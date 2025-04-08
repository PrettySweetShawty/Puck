import React, { useState } from 'react';
import Header from './Header';
import './App.css';

const videos = [
  "/videos/puck_illusory_orb.mp4",
  "/videos/puck_waning_rift.mp4",
  "/videos/puck_phase_shift.mp4",
  "/videos/puck_dream_coil.mp4"
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <Header /> {}

      <div className="background-container">
        <div className="content-wrapper">
          {}
          <div className="content-box">
            <div className="text-content">
              <h1 className="greeting-text">Пак!</h1>
              <p className="description">
                Игривый и увёртливый Пак мастерски запутывает противников. Он может переместиться на небольшое расстояние с помощью своей смертоносной сферы и обезмолвить врагов магической пылью, а когда противник опомнится, будет слишком поздно: Puck уже исчезнет за горизонтом.
              </p>
            </div>
            <div className="image-content">
              <img src={process.env.PUBLIC_URL + '/puck.png'} alt="Puck_image" className="media" />
            </div>
          </div>

          {/* видео и кнопки */}
          <div className="video-section">
            <div className="video-container">
              <video className="video" key={currentVideo} controls autoPlay loop muted>
                <source src={videos[currentVideo]} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
            <div className="video-controls" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', zIndex: 1 }}>
              <button tabIndex="0" onClick={handlePrev}>
                &#9664;
              </button>
              <button tabIndex="0" onClick={handleNext}>
                &#9654;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
