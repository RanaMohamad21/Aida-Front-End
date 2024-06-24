import Searchbar from "../UI/Searchbar";
import Navbar from "../UI/Navbar";
import UpperFooter from "../UI/UpperFooter";
import { Link } from "react-router-dom";

import OnSaleCover from "../assets/home/OnSaleHomePage.jpg";
import { useState } from "react";
import dummy1 from "../assets/UI/productView.jpeg";
import dummy2 from "../assets/dummy/dummy2.jpg";
import dummy3 from "../assets/dummy/dummy3.jpeg";
import dummy4 from "../assets/dummy/dummy4.jpeg";
import dummy5 from "../assets/dummy/dummy5.jpeg";
import CardSlider from "../UI/CardSlider";
import SeasonalOffers from "../UI/SeasonalOffers";
// import { useAuthentication } from "../Authentication/AuthenticationContext";

// Sliding windows settings:
// const onSaleSlidesNumber = 1;
const largeScreanSimilarProductNumber = 5;
const mediumScreanSimilarProductNumber = 3;

//** */ Dummy:
import dummyImage1 from "../assets/dummy/Samsung - Copy.png"
import dummyImage2 from "../assets/dummy/Product images.png";
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
} from "react-bootstrap-icons";
const dummyImages = [dummy1, dummy2, dummy3, dummy4, dummy5];
const similarItems = [
  {
    itemID: 0,
    rating: 3.0,
    isBestSeller: true,
    itemName: "ProSound XG700",
    discountValue: 0.05,
    pricebeforeDiscount: 868.11,
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
    dummyImage: dummyImage2,
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
    dummyImage: dummyImage1,
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

function HomePage() {
  // const {user} = useAuthentication();
  const [onSale, setONSale] = useState([OnSaleCover, ...dummyImages]);
  // This state will be set using the useEffect hook after integration
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen w-screen">
      <div>
        <Searchbar />
        <Navbar />
      </div>
      <div className=" flex flex-col">
        {/* Main  home component */}
        <div className=" bg-IceBlue">
          {/* On Sale section */}
          <SeasonalOffers
            title={"On sale"}
            productsOnSale={onSale}
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

          {/*End of On Sale section */}
          {/* sections */}
          {/* Recomended for you  */}

          {/* //TODO Add authentication for recomended for you section  */}
          <Shelf
            shelfName={"Recommended for you"}
            icon={
              <Star color="#FFFFFF" size="20" full={true} disabled={true} />
            }
          >
            <div className="   w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
                largeScreanSlidesNumber={largeScreanSimilarProductNumber}
                mediumScreanSlidesNumber={mediumScreanSimilarProductNumber}
              >
                {similarItems.map((item, index) => (
                  <div key={index} className="">
                   <Link to={`/productviewpage/${item.itemID}`}>
                   <ProductCard
                      dummyItem={item}
                      style={"mr-4 bg-white rounded-xl h-[400px] my-2 p-3"}
                    />
                   </Link>
                  </div>
                ))}
              </CardSlider>

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>
          {/* New Shipment */}
          <Shelf shelfName={"New Shipments"} icon={<Truck />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Fashion */}
          <Shelf shelfName={"Fashion"} icon={<HandbagFill />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Electronics */}
          <Shelf shelfName={"Electronic devices"} icon={<Mouse2Fill />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Health */}
          <Shelf shelfName={"Health and wellness"} icon={<Activity />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Pet supplies */}
          <Shelf shelfName={"Pet supplies"}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Books  */}
          <Shelf shelfName={"Books"} icon={<BookFill />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Home essentials  */}
          <Shelf shelfName={"Home essentials"} icon={<HouseFill />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>

          {/* Office supplies  */}
          <Shelf shelfName={"office supplies"} icon={<BuildingsFill />}>
            <div className="  w-screen mx-4 bg-white mt-2   ">
              <CardSlider
                styles=" w-[90%] "
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

              <div className=" px-6 text-teal hover:text-FlamingoPink  hover:italic mb-4">
                <Link to="/searchpage">Checkout more...</Link>
              </div>
            </div>
          </Shelf>
        </div>
      </div>
      <UpperFooter />
    </div>
  );
}

export default HomePage;
