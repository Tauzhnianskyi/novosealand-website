import React, { useState } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <h2 className="section-title">Our Work in Action</h2>
      <div className="video-wrapper">
        {!isPlaying ? (
          <>
            {/* Постер */}
            <img
              src="/images/video-preview.jpg"
              alt="Video Preview"
              className="video-poster"
            />
            {/* Кнопка Play */}
            <button className="play-button" onClick={handlePlay}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </>
        ) : (
          // Видео Vimeo
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/1102295811?h=592cad5040&autoplay=1"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
