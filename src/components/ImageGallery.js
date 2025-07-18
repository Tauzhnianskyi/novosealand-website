import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './ImageGallery.css';

const images = [
  "/images/gallery/IMG-20250701-WA0036.jpg",
  "/images/gallery/IMG-20250701-WA0039.jpg",
  "/images/gallery/IMG-20250701-WA0040.jpg",
  "/images/gallery/IMG-20250701-WA0001.jpg",
  "/images/gallery/IMG-20250701-WA0014.jpg",
  "/images/gallery/IMG-20250701-WA0015.jpg",
  "/images/gallery/IMG-20250701-WA0016.jpg",
  "/images/gallery/IMG-20250701-WA0018.jpg",
  "/images/gallery/IMG-20250701-WA0019.jpg",
  "/images/gallery/IMG-20250701-WA0022.jpg",
  "/images/gallery/IMG-20250701-WA0027.jpg",
  "/images/gallery/IMG-20250701-WA0028.jpg",
  "/images/gallery/IMG-20250701-WA0029.jpg",
  "/images/gallery/IMG-20250701-WA0030.jpg",
  "/images/gallery/IMG-20250701-WA0031.jpg",
  "/images/gallery/IMG-20250701-WA0032.jpg",
  "/images/gallery/IMG-20250701-WA0035.jpg",
  "/images/gallery/IMG-20250701-WA0037.jpg",
  "/images/gallery/IMG-20250701-WA0045.jpg"
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="gallery-container" id="gallery">
      <div className="section-header">
        <h2>Gallery</h2>
        <div className="underline"></div>
      </div>

      <div className="main-image-wrapper">
        <img src={images[selectedIndex]} alt="Main" className="main-image" />
      </div>

      <div className="thumbnail-carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          navigation
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 }
          }}
          className="thumbnail-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  height: '70px',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                  border:
                    selectedIndex === index
                      ? '2px solid #FF9233'
                      : '2px solid transparent',
                  cursor: 'pointer'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
