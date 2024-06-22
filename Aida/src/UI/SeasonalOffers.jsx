import PropTypes from 'prop-types';
import { useState } from 'react';

function SeasonalOffers({ productsOnSale, title, icon = "", styles }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsOnSale.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsOnSale.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`w-full px-28 py-4 capitalize text-white text-3xl h-max ${styles}`}>
      <div className="flex items-center">
        <span className="pr-2">{icon}</span>
        <span>{title}</span>
      </div>
       {/* The sliding window */}
      <div className="relative w-full max-w-[600px] mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={productsOnSale[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-64 object-cover  duration-1000 transition-all  transform-gpu"
          />
        </div>
       

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 hover:bg-IceBlue rounded-full p-2 shadow-xl focus:outline-none mx-1">
          <button onClick={prevSlide}>&lt;</button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hover:bg-IceBlue bg-opacity-50 rounded-full p-2 shadow-lg focus:outline-none mx-1">
          <button onClick={nextSlide}>&gt;</button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
          {productsOnSale.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full shadow-lg ${
                currentIndex === index ? 'bg-white' : 'bg-gray'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SeasonalOffers.propTypes = {
  productsOnSale: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  icon: PropTypes.any
};

export default SeasonalOffers;
