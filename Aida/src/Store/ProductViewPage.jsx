import Button from "../UI/Button";
import StarRating from "../UI/StarRating";
import ProductsCart from "../assets/Store/productsCart.jpeg";

// TODO: We must check that the amount available for the user to buy is <= the stock count
const maxProductsCount = 100;
function ProductViewPage() {
  return (
    <div className=" grid grid-rows-[1fr,auto,auto,auto] h-screen mb-12 bg-IceBlue ">
      {/* Product details */}
      <div className="  grid sm:grid-cols-[40%,] md:grid-cols-[1fr,3fr] ">
        {/* Subscribe and add to cart */}
        <div className="  flex items-center justify-center uppercase sm:w-[270px] lg:w-[350px]">
          <div className=" bg-white  w-[85%] flex-col justify-center border-t-2 rounded-b-xl border-gray rounded-tl-[30%] border-l-2 rounded-tr-[50%] p-5 text-teal">
            <img
              src={ProductsCart}
              className=" rounded-full w-32 h-32 mx-auto"
            />
            <p>Price EGP</p>
            <p>
              {" "}
              <span className=" bg-FlamingoPink py-2 px-3">
                percentage
              </span>{" "}
              price before discount{" "}
            </p>
            <h1>Rating</h1>
            <StarRating />
            <label>Quantity</label>
            <select className="border  border-solid mx-3 rounded-lg active:border-teal ">
              {Array.from({ length: maxProductsCount }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <Button style=" bg-FlamingoPink">Add to Cart</Button>
            <Button style=" bg-teal">Subscribe</Button>
          </div>
        </div>
        {/* Product Features */}
        <div className=" bg-IceBlue">
          {/* Images */}
          <div></div>
          {/* Product Details */}
        </div>
      </div>
      {/* Reviews */}
      <div className=" bg-darkTeal ">Reviews</div>
      {/* From the same store */}
      <div className=" bg-gray">Same store</div>
      {/* Similar products */}
      <div className=" bg-darkGray ">Similar product</div>
    </div>
  );
}

export default ProductViewPage;
