import star from "../assets/UI/star.png";
import trash from "../assets/vendor/products/trash.png";
import dummyImage from "../assets/dummy/Product images.png";
/*
@TODO: Assumption, the item object contains the price before discount and the discount value. If the discount value = 0, then there is no discount, else, there is a discount
0<=discountValue < 1
*/
const dummyItem = 
  {
    rating: 3.0,
    isBestSeller: true,
    itemName: "Men's suit",
    discountValue: 0.05,
    pricebeforeDiscount: 70000,
    availableLeft: 10,
    revenues: 12023,
    subscribed: 20,
    dummyImage,
  };
// eslint-disable-next-line no-unused-vars, react/prop-types
function ItemCard() {
  const priceAfterDiscount =
    (1 - dummyItem.discountValue) * dummyItem.pricebeforeDiscount;
    console.log("Discount Value:", dummyItem.discountValue);
console.log("Price before Discount:", dummyItem.pricebeforeDiscount);

  return (
    <div className="w-[25%] flex flex-col   text-black p-2">
      <div className="flex text-teal text-2xl justify-between pl-3 ">
        <div className="flex">
        <span className="">
          {dummyItem.rating}
        </span>
          <span className="mt-1 mx-1">
            <img src={star} className="w-5" />
          </span>
        </div >
        {dummyItem.isBestSeller && (
          <div className=" text-FlamingoPink uppercase text-sm my-auto ">Best Seller</div>
        )}
      </div>
      
        <img src={dummyImage} className="w-full h-full" />
      
      <div className=" font-semibold text-xl">{dummyItem.itemName}</div>
      {dummyItem.discountValue > 0 ? (
        <>
          {" "}
          <div className="flex ">
            {" "}
            <div className=" text-xl font-semibold">{dummyItem.discountValue * 100}%</div>
            <div className=" line-through ml-6">{dummyItem.pricebeforeDiscount}</div>
          </div>
          <div className=" text-lg font-semibold">
            {priceAfterDiscount }{" "}
            <span className=" uppercase text-gray">egp</span>
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
        <img src={trash} alt="delete" className="h-6 mt-1" />
      </div>
    </div>
  );
}

export default ItemCard;
