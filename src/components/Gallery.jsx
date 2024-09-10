import { useState } from "react";
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/5969/wood-nature-forest-bridge.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/373920/pexels-photo-373920.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/164241/pexels-photo-164241.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];

  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightBox = (index) => {
    setCurrentImageIndex(index);
    setLightBoxOpen(true);
  };

  const closeLightBox = (e) => {
    if (e.target === e.currentTarget) {
      setLightBoxOpen(false);
    }
  };

  const showLightBoxImage = (index) => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    setCurrentImageIndex(index);
  };

  const prevImage = () => {
    showLightBoxImage(currentImageIndex - 1);
  };

  const nextImage = () => {
    showLightBoxImage(currentImageIndex + 1);
  };

  return (
    <div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            data-index={index + 1}
            onClick={() => openLightBox(index)}
            style={{ cursor: "pointer" }} // Make it clear that the item is clickable
          >
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>

      {lightBoxOpen && (
        <div className="lightbox" onClick={closeLightBox}>
          <div className="lightbox-content">
            <img src={images[currentImageIndex]} alt="Lightbox content" />
            <div className="fa fa-angle-left lightbox-prev" onClick={prevImage}></div>
            <div className="fa fa-angle-right lightbox-next" onClick={nextImage}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
