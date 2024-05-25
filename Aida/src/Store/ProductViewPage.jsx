import { useState } from "react";
import PropTypes from 'prop-types';

import ProductPriceCard from "../UI/ProductPriceCard";
import ProductDetails from "../UI/ProductDetails";
import Shelf from "../UI/Shelf";
import "react-multi-carousel/lib/styles.css";
import CardSlider from "../UI/CardSlider";
import Star from "../UI/Star";
import StarRating from "../UI/StarRating";
import background from "../assets/UI/productView.jpeg";
// For testing
import dummyImage1 from "../assets/dummy/Product images.png";
import dummyImage2 from "../assets/dummy/Samsung.png";
import ProductCard from "../UI/ProductCard";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../Contexts/ShoppingCartProvider";
import Searchbar from "../UI/Searchbar";
// import Carousel from "react-multi-carousel";

const similarItems = [
  {
    itemID: 0,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Men's suit",
    discountValue: 0.05,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage1,
  },
  {
    itemID: 1,
    rating: 3.0,
    isBestSeller: false,
    itemName: "Armini Gold",
    discountValue: 0,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage1,
  },
  {
    itemID: 2,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Armini",
    discountValue: 0,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage1,
  },
  {
    itemID: 3,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Men's suit",
    discountValue: 0.07,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage1,
  },

  {
    itemID: 0,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Men's like",
    discountValue: 0.05,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage2,
  },
  {
    itemID: 1,
    rating: 3.0,
    isBestSeller: false,
    itemName: "Samsung",
    discountValue: 0,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage2,
  },
  {
    itemID: 2,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Samsung the dup",
    discountValue: 0,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage2,
  },
  {
    itemID: 3,
    rating: 3.0,
    isBestSeller: true,
    itemName: "Men's suit",
    discountValue: 0.07,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage: dummyImage2,
  },
];
// TODO: We must check that the amount available for the user to buy is <= the stock count


// Dummy
const dummyReviews = [
  { name: "Rana Mohamad", rating: 4, review: "Such high quality!" },
  {
    name: "Sara Abdullah",
    rating: 5,
    review: "Absolutely fantastic, best product!",
  },
  {
    name: "Mohammed Ahmed",
    rating: 3,
    review: "Acceptable quality, but can be improved",
  },
  { name: "Fatima Youssef", rating: 2, review: "Poor quality product" },
  { name: "Ahmed Ali", rating: 4, review: "Good quality and reasonable price" },
  {
    name: "Nora Khalid",
    rating: 5,
    review: "Loved it so much, will definitely repurchase",
  },
  {
    name: "Yaser Hassan",
    rating: 1,
    review: "Not worth buying, very poor quality",
  },
  {
    name: "Salman Mohammed",
    rating: 4,
    review: "Excellent, highly recommend it",
  },
  {
    name: "Mariam Jamal",
    rating: 3,
    review: "Decent product, meets expectations",
  },
];

/**
 * The product:
 * An object consisting of:
 *    - title: string  product name
 *    - briefDescription: string placed next to the title
 *    - description: string
 *    - mainFeatures: An array of strings
 *    - Specifications: An array of objects, each object consists of a specification name and value
 *    -AvailableQuantity: Number
 *    - Rating
 *    - Discount: float discount amount if exists
 */

// Settings for reviews sliding window
const largeScreanReviewsNumber = 3;
const mediumScreanReviewsNumber = 2;

const largeScreanSameStoreProductNumber = 4;
const mediumScreanSameStoreProductNumber = 2;

const largeScreanSimilarProductNumber = 5;
const mediumScreanSimilarProductNumber = 3;

const dummyProduct = {
  availableQuantity: 11,
  rating: 4,
  discount: 0.5,
  title: "ProSound XG700",
  briefDescription: "Over-Ear Wireless Noise-Cancelling Headphones",
  description:
    "Experience the ultimate sound quality with the ProSond XG700. These over-ear headphoes offer superior noise-cancellation technology, ensuring an ummersive audio experience. With a sleek design and comfortable movement and the long0lasting battery ensures you can enjoy your favorite tunes all day long",
  features: [
    "Superior Sound Quality",
    "Noise-cancellation Technology",
    "advanced noise-cancellation technology",
    "Wireless Connectivity",
    "Comfortable filt",
    "long-lasting battery",
  ],
  specifications: [
    { name: "Color", value: "Classic black" },
    { name: "Battery", value: "40 hours" },
    { name: "Warranty", value: "2 years" },
  ],
  priceBeforeDiscount: 868.11,
};

// This is a reusable page that is viewed by both the vendor and the customer but with different details each,
function ProductViewPage({ isVendor = false }) {
  const [product] = useState(dummyProduct);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState();
  const [commentAdded, setCommentAdded] = useState(false);
  const [reviews, setReviews] = useState(dummyReviews);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [addedOtherProducts,setAddedOtherProducts] = useState(false)
  const {addToCart} = useShoppingCart()
  const [subscribe, setSubscribe] = useState(false);
  function handleReview(e) {
    setNewReview(e.target.value);
  }
  function handleAddReview() {
    const newReviewObj = {
      name: "Dummy Name",
      rating: newRating,
      review: newReview,
    };
    setReviews([...reviews, newReviewObj]);
    setNewRating();
    setNewReview("");
    setCommentAdded(true);
  }

 
  const handleCheckboxChange = (productId) => {
    console.log("id: "+ productId )
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(productId)
        ? prevSelectedProducts.filter((id) => id !== productId)
        : [...prevSelectedProducts, productId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedProducts.length<1)
      return
    
    // Add each selected product to the cart
    selectedProducts.forEach((productId) => {
      addToCart(productId, 1); // Add each selected product with quantity 1
    });
    setAddedOtherProducts(true);

  };
  return (
    <div className=" mb-12 w-full ">
      <Searchbar/>
      <div className=" grid grid-rows-[1fr,auto,auto,auto] h-full  bg-IceBlue w-full ">
        {/* Product details */}
        <div className="  grid sm:grid-cols-[1fr,4fr] md:grid-cols-[1fr,3fr] mb-5  ">
          {/* Subscribe and add to cart */}
          <ProductPriceCard product={product} disable={isVendor} subscription={{subscribe,setSubscribe}} />
          {/* Product Features */}
          <ProductDetails product={product} />
        </div>

        {/* Reviews start */}

        <Shelf shelfName={"Reviews"} styles={' mb-6'}>
          <div className="  w-screen flex gap-4  mx-2">
            <CardSlider
              styles="w-2/3"
              largeScreanSlidesNumber={largeScreanReviewsNumber}
              mediumScreanSlidesNumber={mediumScreanReviewsNumber}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white h-20 flex flex-col items-center justify-center w-56 mx-6 mt-2"
                >
                  <div className="flex">
                    <span className="font-semibold text-md px-2">
                      {review.name}
                    </span>
                    <span className="text-teal">
                      {review.rating.toFixed(1)}
                    </span>
                    <Star
                      color="#25b5ba"
                      full={true}
                      size="20"
                      disable={false}
                    />
                  </div>
                  <p className="text-xs px-2">{review.review}</p>
                </div>
              ))}
            </CardSlider>
            {commentAdded ? (
              <p className=" flex items-center justify-center bg-white text-FlamingoPink p-2 rounded-xl mt-2">
                Comment Added!
              </p>
            ) : (
              <div className=" flex flex-col bg-white p-3 rounded-md ">
                <StarRating disable={isVendor} onSetRating={setNewRating} />
                <input
                  type="text"
                  maxLength={200}
                  value={newReview}
                  placeholder="Leave a comment"
                  onChange={handleReview}
                  className=" border border-solid px-2 border-darkGray"
                  disabled={isVendor}
                />
                <div className=" flex items-center justify-center">
                  <button
                    onClick={handleAddReview}
                    className={` mt-2 rounded-xl text-white w-24 ${
                      isVendor ? "bg-gray cursor-auto" : " bg-teal"
                    }`}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </Shelf>
        {/* Reviews end */}

        {/* From the same store */}
        <Shelf shelfName={"From the same store"}>
  <form onSubmit={handleSubmit}>
    <div className="w-screen flex justify-between gap-2 mx-2">
      <CardSlider
        styles="w-2/3"
        largeScreanSlidesNumber={largeScreanSameStoreProductNumber}
        mediumScreanSlidesNumber={mediumScreanSameStoreProductNumber}
      >
        {similarItems.map((item, index) => (
          <div key={index} className="my-2">
            <label className="">
              <input
                type="checkbox"
                style={{ color: "teal" }}
                onChange={() => handleCheckboxChange(item.itemID)} // assuming each item has a unique 'id' field
              />
              <ProductCard
                dummyItem={item}
                style={"mx-4 p-4 bg-white rounded-xl h-[400px]"}
              />
            </label>
          </div>
        ))}
      </CardSlider>
      <div className="flex justify-center w-full">
        <div
          className="relative flex flex-col items-center justify-center text-FlamingoPink rounded-xl mt-2"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-20 rounded-xl"
          ></div>
          <div className="relative flex bg-FlamingoPink items-center w-full py-1 h-20 justify-center text-white mb-2">
            Total Price
          </div>
          <button
            type="submit"
            className={`relative capitalize rounded-2xl px-4 py-2 ${
              isVendor || addedOtherProducts
                ? "bg-gray text-white cursor-auto"
                : "bg-white text-black cursor-pointer"
            }`}
            disabled={isVendor || addedOtherProducts}
          >
            {addedOtherProducts ? <span>added!</span> : <span>Add to cart</span>}
          </button>
        </div>
      </div>
    </div>
  </form>
</Shelf>
        {/* Similar products */}
        <Shelf shelfName={"Similar Products"}>
          <div className="  w-screen mx-4   ">
            <CardSlider
              styles=" w-[90%]"
              largeScreanSlidesNumber={largeScreanSimilarProductNumber}
              mediumScreanSlidesNumber={mediumScreanSimilarProductNumber}
            >
              {similarItems.map((item, index) => (
                <div key={index} className="">
                  <ProductCard
                    dummyItem={item}
                    style={"mr-4 bg-white rounded-xl h-[400px] my-2 p-3"}
                  />
                </div>
              ))}
            </CardSlider>

            {isVendor ? (
              <p className=" bg-FlamingoPink text-white w-max  p-3 font-semibold">
                This is how the customer will see your product
              </p>
            ) : (
              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            )}
          </div>
        </Shelf>
      </div>
    </div>
  );
}



ProductViewPage.propTypes = {
    isVendor: PropTypes.bool
};



export default ProductViewPage;




