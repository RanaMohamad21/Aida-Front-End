/* eslint-disable react/prop-types */

import { useState } from "react";
import StarRating from "../UI/StarRating";
import ProductsCart from "../assets/Store/productsCart.jpeg";
import { BellFill, CartFill, Check2, XLg } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useShoppingCart } from "../Contexts/ShoppingCartProvider";
import { useAuthentication } from "../Contexts/AuthenticationContext";

const maxProductsCount = 100;

// This is a reusable component used in the product view
// page for both the vendor and the customer, but for the vendor, the buttons are disabled.
function ProductPriceCard({ product, disable, subscription }) {
  const { subscribe, setSubscribe } = subscription;
  const { addToCart } = useShoppingCart();
  const { isAuthenticated } = useAuthentication();
  // Sets the Text in the UI button based on the state
  const [addedToCart, setAddedToCart] = useState(false);
  const discountedPrice = product.priceBeforeDiscount * product.discount;
  const hasDiscount = Math.abs(product?.discount) > 0;
  const isOutOfStock = product?.availableQuantity < 1;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addToCart(product.id, data.quantity);
    setAddedToCart(true);
    // Handle adding to cart logic here
  };

  return (
    <div className="flex pt-16 items-center justify-center Capitalize sm:w-[270px] lg:w-[350px]">
      <div className="bg-white w-[85%] flex-col justify-center items-center border-t-2 rounded-b-xl border-teal border-opacity-[20%] rounded-tl-[20%] border-l-2 rounded-tr-[32%] px-4 space-y-5 space-x-1 py-10">
        <img src={ProductsCart} className="rounded-full w-32 h-32 mx-auto" />

        <p className="flex justify-center text-2xl">
          {discountedPrice.toFixed(2)}{" "}
          <span className="font-semibold ml-2">EGP</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          {hasDiscount && (
            <div>
              <span className="bg-FlamingoPink font-semibold text-white py-2 px-3">
                - {product.discount * 100}%
              </span>{" "}
              <span className="text-teal line-through">
                {product.priceBeforeDiscount}
              </span>
            </div>
          )}
        </p>
        <div className="pb-4">
          <h1 className="font-semibold">Rating</h1>
          <StarRating defaultRating={4} disable={true} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {isOutOfStock ? (
            <span className="text-FlamingoPink">Out of stock</span>
          ) : (
            !addedToCart && (
              <div>
                <label className="font-semibold pr-8 inline-block">Quantity</label>
                <select
                  {...register("quantity", { required: true })}
                  className="border w-max border-solid mx-3 rounded-lg active:border-teal max-h-32 overflow-y-auto"
                  disabled={disable}
                >
                  {Array.from({ length: maxProductsCount }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}

          {!isOutOfStock && (
            <>
              {isAuthenticated ? (
                <button
                  type="submit"
                  className={`text-white rounded-md h-8 uppercase my-5 w-full text-center justify-center pt-1 mx-auto ${
                    disable || addedToCart
                      ? "bg-gray cursor-auto"
                      : "bg-FlamingoPink cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  }`}
                  disabled={disable || addedToCart}
                >
                  <div>
                    {addedToCart ? (
                      <span className="flex justify-center items-center gap-2">
                        Added to cart <Check2 />
                      </span>
                    ) : (
                      <span className="flex justify-center items-center gap-2">
                        Add to Cart <CartFill />
                      </span>
                    )}
                  </div>
                </button>
              ) : (
                <span className="text-FlamingoPink font-semibold block text-center mt-5">
                  Log in to add to cart
                </span>
              )}
            </>
          )}
        </form>
        <button
          className={`text-white rounded-md h-8 uppercase my-5 w-full text-center justify-center pt-1 mx-auto ${
            disable
              ? "bg-gray cursor-auto"
              : "bg-teal cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          }`}
          disabled={disable}
          onClick={() => setSubscribe((prev) => !prev)}
        >
          {subscribe ? (
            <div className="flex justify-center items-center gap-2">
              Unsubscribe <XLg />
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2">
              Subscribe <BellFill />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductPriceCard;
