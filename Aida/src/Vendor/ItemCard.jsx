/* eslint-disable react/prop-types */
import star from "../assets/UI/star.png";
import trash from "../assets/vendor/products/trash.png";
/*
@TODO: Assumption, the item object contains the price before discount and the discount value. If the discount value = 0, then there is no discount, else, there is a discount
0<=discountValue < 1
*/

// eslint-disable-next-line no-unused-vars, react/prop-types
function ItemCard({ dummyItem, deleteItem, shelfID }) {
  const priceAfterDiscount =
    (1 - dummyItem.discountValue) * dummyItem.pricebeforeDiscount;
  console.log("Discount Value:", dummyItem.discountValue);
  console.log("Price before Discount:", dummyItem.pricebeforeDiscount);

  return (
    <div className=" mx-4 flex flex-col w-52 text-black p-2">
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
      {dummyItem.discountValue > 0 ? (
        <>
          {" "}
          <div className="flex ">
            {" "}
            <div className=" text-xl font-semibold">
              {(dummyItem.discountValue * 100).toFixed(2)}%
            </div>
            <div className=" line-through ml-6">
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
          <span className=" uppercase text-gray">egp</span>
        </div>
      )}
      <div className=" flex justify-between text-teal">
        <span>available left</span>
        <span>{dummyItem.availableLeft}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>Revenues</span>
        <span>{dummyItem.revenues}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>subscribed</span>
        <span>{dummyItem.subscribed}</span>
      </div>
      <div className="flex  justify-end">
        <button onClick={() => deleteItem(shelfID, dummyItem.itemID)}>
          <img src={trash} alt="delete" className="h-6 mt-1" />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
