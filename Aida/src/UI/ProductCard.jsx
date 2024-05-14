/* eslint-disable react/prop-types */
import star from "../assets/UI/star.png";

/*
@TODO: Assumption, the item object contains the price before discount and the discount value. If the discount value = 0, then there is no discount, else, there is a discount
0<=discountValue < 1
*/

// This is a component that views the important details
// of a product to be displayed in the home page and vendor products pages.
function ProductCard({ dummyItem , children ="", style=""}) {
  const hasDiscount = dummyItem.discountValue>0?true:false
  const priceAfterDiscount =
    (1 - dummyItem.discountValue) * dummyItem.pricebeforeDiscount;

  return (
    <div className= {` ${style}
     flex flex-col w-52 text-black `}>
      <div className="flex text-teal text-2xl justify-between pl-3 ">
        <div className="flex">
          <span className="pr-1">{dummyItem.rating.toFixed(2)}</span>
          <span className="mt-1 mx-1">
            <img src={star} className="w-5 " />
          </span>
        </div>
        {dummyItem.isBestSeller && (
          <div className=" text-FlamingoPink  uppercase text-sm my-auto ">
            Best Seller
          </div>
        )}
      </div>

      <img src={dummyItem.dummyImage} className="w-full h-full" />

      <div className=" font-semibold text-xl">{dummyItem.itemName}</div>
      {hasDiscount ? (
        <>
          {" "}
          <div className="flex ">
            {" "}
            <div className=" text-lg font-semibold text-FlamingoPink">
              {(dummyItem.discountValue * 100).toFixed(2)}%
            </div>
            <div className=" line-through ml-6 text-teal">
              {dummyItem.pricebeforeDiscount}
            </div>
          </div>
          <div className=" text-lg font-semibold">
            {priceAfterDiscount.toFixed(2)}{" "}
            <span className=" uppercase text-darkGray text-sm">egp</span>
          </div>
        </>
      ) : (
        <div className=" text-lg">
          {dummyItem.pricebeforeDiscount}{" "}
          <span className=" uppercase text-darkGray">egp</span>
        </div>
      )}

      {/* Variable Items */}
      {children}
    </div>
  );
}

export default ProductCard;
