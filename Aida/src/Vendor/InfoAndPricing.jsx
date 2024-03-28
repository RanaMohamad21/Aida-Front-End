import { useState } from "react";
import info from "../assets/vendor/products/information-button.png";
import pricing from "../assets/vendor/products/price-tag.png";

function InfoAndPricing() {
  const [count, setCount] = useState(0);

  function handleCount(val) {
    setCount(Number(val));
  }

  return (
    <div className="grid  grid-rows-[auto,1fr,,1fr,1fr,1fr] px-10 md:px-20 text-teal font-semibold">
      {/* Title  */}
      <div className="flex justify-center mt-5 mb-8">
        <p className=" mx-auto text-teal capitalize ">product info</p>
      </div>

      {/* Info and Pricing    */}
      <div className=" sm:grid grid-cols-2">
        {/* Info  */}
        <div className="border-r-2 sm:border-gray pr-10 grid grid-rows-[1fr,1fr,repeat(4,min-content)] gap-4 ">
          <div className=" flex justify-center ">
            <span className="px-2  ">
              <img src={info} alt={"information"} />
            </span>
            <p className=" text-FlamingoPink flex font-semibold"> Info</p>
          </div>

          {/* Title  */}
          <div>
            <h1>Title</h1>
            <input
              type="text"
              placeholder="Type..."
              className=" border border-solid px-2 w-full md:w-[60%] border-black"
            />
          </div>

          {/* Category  */}
          <div>
            <h1>Category</h1>
            <select
              name="category"
              className=" w-full bg-teal bg-opacity-10 p-2  md:w-[60%] rounded-md text-black font-thin text-sm "
            >
              <option>Fashion</option>
              <option>Electronics</option>
              <option>Sports</option>
              <option>Health &amp; wellness</option>
              <option>Pet supplies</option>
              <option>Books</option>
              <option>Home essentials</option>
              <option>Office supplies</option>
            </select>
          </div>
          {/* Available Stock */}
          <div className="flex justify-between ">
            <div>Available stock</div>
            <div className="flex ">
              <button type="button" onClick={() => setCount((ct) => ct - 1)}>
                -
              </button>
              <input
                type="text"
                className=" w-12 mx-2 pl-2 "
                value={count}
                onChange={(e) => handleCount(e.target.value)}
              />
              <button type="button" onClick={() => setCount((ct) => ct + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Subscription */}
          <div className=" flex justify-between ">
            <label htmlFor="subscription">Enable subscription</label>
            <input type="checkbox" id="subscription" />
          </div>

          {/* Is Used */}
          <div className=" flex justify-between ">
            <label htmlFor="used">Is Used</label>
            <input type="checkbox" id="used" />
          </div>
        </div>

        {/* Pricing */}
        <div className=" grid grid-rows-4 pl-10">
          <div className=" flex justify-center ">
            <span className="px-2  ">
              <img src={pricing} alt={"pricing"} />
            </span>
            <p className=" text-FlamingoPink flex font-semibold mt-1 ">
              Pricing
            </p>
          </div>
          {/* Price */}
            <div>
            <h1 className=" block">Price</h1>
          <div className=" flex">
            <input placeholder="00" className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black" /> 
            <span className=" text-black">.</span>
            <input placeholder="00" 
             className=" w-[48%] p-2 border border-solid h-5 ml-2 border-black"/>
          </div>
            </div>

          {/* Taxes */}
          <div>
          <h1 className=" block">Taxes</h1>
          <div className=" flex">
            <input placeholder="00" className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black" /> 
            <span className=" text-black">.</span>
            <input placeholder="00" 
             className=" w-[48%] p-2 border border-solid h-5 ml-2 border-black"/>
          </div>
          </div>

          {/* Create discount */}
          <div></div>
        </div>
      </div>

      {/* Specification  */}
      <div></div>

      {/* Tags  */}
      <div></div>

      {/* Description  */}
      <div></div>
    </div>
  );
}

export default InfoAndPricing;
