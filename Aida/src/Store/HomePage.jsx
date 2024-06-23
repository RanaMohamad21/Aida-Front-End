import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import UpperFooter from "../UI/UpperFooter";
import { Link } from "react-router-dom";
import { useContext } from "react";

import OnSaleCover from "../assets/home/OnSaleHomePage.jpg";
import { useState } from "react";
import dummy1 from "../assets/dummy/dummy2.jpg";
import dummy2 from "../assets/dummy/dummy3.jpeg";
import dummy3 from "../assets/dummy/dummy4.jpeg";
import dummy4 from "../assets/dummy/dummy5.jpeg";
import CardSlider from "../UI/CardSlider";
import SeasonalOffers from "../UI/SeasonalOffers";
import { ProductContext } from "../Contexts/ProductContext";

// Dummy images for ProductCard
import dummyImage1 from "../assets/dummy/Product images.png";
import dummyImage2 from "../assets/dummy/Samsung.png";
import ProductCard from "../UI/ProductCard";
import Shelf from "../UI/Shelf";
import Star from "../UI/Star";

import {
  Activity,
  BookFill,
  BuildingsFill,
  HandbagFill,
  HouseFill,
  Mouse2Fill,
  Truck,
} from 'react-bootstrap-icons';

const largeScreanSimilarProductNumber = 5;
const mediumScreanSimilarProductNumber = 3;

function HomePage() {
  const { allProducts, recommendedProducts, newShippmentProducts, onSaleProducts, underPriceProducts } = useContext(ProductContext);

  // Function to render a limited number of products
  const renderLimitedProducts = (products) => {
    // Limit the products to the first 5 items
    const limitedProducts = products.slice(0, 5);

    return limitedProducts.map((item, index) => (
      <div key={index} className="">
        <ProductCard
          dummyItem={item}
          style={"mr-4 bg-white rounded-xl h-[400px] my-2 p-3"}
          
        />
      </div>
    ));
  };

  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen w-screen">
      <div>
        <Searchbar />
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="bg-IceBlue">
          <SeasonalOffers
            title={"On sale"}
            productsOnSale={onSaleProducts}
            styles={"bg-FlamingoPink mb-4 pl-5 mt-4 w-[100%]"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-gift-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
              </svg>
            }
          />

          {recommendedProducts.length > 0 && (
            <Shelf
              shelfName={"Recommended for you"}
              icon={
                <Star color="#FFFFFF" size="20" full={true} disabled={true} />
              }
            >
              <div className="w-screen mx-4 bg-white mt-2">
                <CardSlider
                  styles="w-[90%]"
                  largeScreanSlidesNumber={largeScreanSimilarProductNumber}
                  mediumScreanSlidesNumber={mediumScreanSimilarProductNumber}
                >
                  {renderLimitedProducts(recommendedProducts)}
                </CardSlider>
                <div className="px-6 text-teal hover:text-FlamingoPink hover:italic mb-4">
                  <Link to="/searchpage">Checkout more...</Link>
                </div>
              </div>
            </Shelf>
          )}

          <Shelf shelfName={"New Shipments"} icon={<Truck />}>
            <div className="w-screen mx-4 bg-white mt-2">
              <CardSlider
                styles="w-[90%]"
                largeScreanSlidesNumber={largeScreanSimilarProductNumber}
                mediumScreanSlidesNumber={mediumScreanSimilarProductNumber}
              >
                {renderLimitedProducts(newShippmentProducts)}
              </CardSlider>
              <div className="px-6 text-teal hover:text-FlamingoPink hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Render other shelves similarly */}
          {/* Example: Fashion shelf */}
          {/* <Shelf shelfName={"Fashion"} icon={<HandbagFill />}>
            <div className="w-screen mx-4 bg-white mt-2">
              <CardSlider
                styles="w-[90%]"
                largeScreanSlidesNumber={largeScreanSimilarProductNumber}
                mediumScreanSlidesNumber={mediumScreanSimilarProductNumber}
              >
                {renderLimitedProducts(allProducts)}
              </CardSlider>
              <div className="px-6 text-teal hover:text-FlamingoPink hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf> */}

          {/* Repeat similar pattern for other shelves */}
          {/* Adjust the shelfName, icon, and products accordingly */}

          <UpperFooter />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
