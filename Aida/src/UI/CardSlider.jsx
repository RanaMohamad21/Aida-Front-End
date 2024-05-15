import PropTypes from "prop-types";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CustomLeftArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10  w-10 h-10 rounded-full flex items-center justify-center "
    >
      {"<"}
    </button>
  );
}

function CustomRightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10  w-10 h-10 rounded-full flex items-center justify-center"
    >
      {">"}
    </button>
  );
}

/***
 * A reusable sliding window 
 * the children must be an array. To see an example,
 * view its use in the Product View Page for the reviews.
 * The SlidesNumber props are used to set the number of visible slides at  a time for different screen sizes.
 */
function CardSlider({
  children,
  styles = "",
  largeScreanSlidesNumber = 1,
  mediumScreanSlidesNumber = 1,
}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: largeScreanSlidesNumber,
      slidesToSlide: 1,


    },
    desktop: {
      breakpoint: { max: 1024, min: 640 },
      items: mediumScreanSlidesNumber,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 640, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={`${styles} relative `}>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {children}
      </Carousel>
    </div>
  );
}

CardSlider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
  styles: PropTypes.string,
  largeScreanSlidesNumber: PropTypes.number,
  mediumScreanSlidesNumber: PropTypes.number
};


export default CardSlider;


// import PropTypes from "prop-types";
// import Star from "./Star";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 3,
//     slidesToSlide: 1,
//     partialVisibilityGutter: 10,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1,
//     partialVisibilityGutter: 10
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//     partialVisibilityGutter: 40
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1
//   },
// };

// function CardSlider({ reviews }) {
//   return (
//     <div className=" w-2/3 ">
//       <Carousel responsive={responsive}

//       >
//       {reviews.map((review, index) => (
//         <div key={index} className="bg-white h-14 w-56 mx-6">
//           <div className="flex">
//             <span className="font-semibold text-md px-2">{review.name}</span>
//             <span className="text-teal">{review.rating.toFixed(1)}</span>
//             <Star color="#25b5ba" full={true} size="20" disable={false} />
//           </div>
//           <p className="text-xs px-2">{review.review}</p>
//         </div>
//       ))}
//     </Carousel>
//     </div>
//   );
// }

// CardSlider.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.object),
// };

// export default CardSlider;
