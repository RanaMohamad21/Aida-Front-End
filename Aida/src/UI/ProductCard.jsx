import React from 'react';
import star from "../assets/UI/star.png";

function ProductCard({ dummyItem = {}, children = "", style = "" }) {
  const {
    rating = 0,
    discount = {},
    price: priceBeforeDiscount,
    isBestSeller = false,
    images = [],
    productName,
  } = dummyItem;

  const discountValue = discount;
  const hasDiscount = discountValue > 0;
  const priceAfterDiscount = (1 - discountValue) * priceBeforeDiscount;

  return (
    <div className={`${style} flex flex-col w-52 text-black`}>
      <div className="flex text-teal text-2xl justify-between pl-3">
        <div className="flex">
          <span className="pr-1">{rating}</span>
          <span className="mt-1 mx-1">
            <img src={star} className="w-5" alt="Star" />
          </span>
        </div>
        {isBestSeller && (
          <div className="text-FlamingoPink uppercase text-sm my-auto">
            Best Seller
          </div>
        )}
      </div>

      <img src={images[0]?.filePath} className="w-full h-full" alt={productName} />

      <div className="font-semibold text-xl">{productName}</div>
      {hasDiscount ? (
        <>
          <div className="flex">
            <div className="text-lg font-semibold text-FlamingoPink">
              {(discountValue * 100)}%
            </div>
            <div className="line-through ml-6 text-teal">
              {priceBeforeDiscount}
            </div>
          </div>
          <div className="text-lg font-semibold">
            {priceAfterDiscount}{" "}
            <span className="uppercase text-darkGray text-sm">egp</span>
          </div>
        </>
      ) : (
        <div className="text-lg">
          {priceBeforeDiscount}{" "}
          <span className="uppercase text-darkGray">egp</span>
        </div>
      )}

      {/* Variable Items */}
      {children}
    </div>
  );
}

export default ProductCard;
