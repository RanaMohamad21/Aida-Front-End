import { useState } from "react";
import info from "../assets/vendor/products/information-button.png";
import pricing from "../assets/vendor/products/price-tag.png";
import ToggleSwitch from "../UI/ToggleSwitch";

function InfoAndPricing() {
  const [count, setCount] = useState(0);
  const [isUp, setIsUp] = useState(true);

  function handleArrow() {
    setIsUp((prevState) => !prevState);
  }

  function handleCount(val) {
    setCount(Number(val));
  }

  return (
    <div className="  pb-10  px-10 md:px-20 text-teal font-semibold  md:w-3/4 md:m-auto">
      {/* Title  */}
      <div className="flex justify-center mt-5 mb-8">
        <p className=" mx-auto text-teal capitalize ">product info</p>
      </div>

      {/* Info and Pricing    */}
      <div className=" sm:grid grid-cols-2">
        {/* Info  */}
        <div className="border-r-2 sm:border-gray pr-10 grid grid-rows-[repeat(6,min-content)] gap-4 ">
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
        <div className=" grid grid-rows-[1fr,auto,1fr] pl-10 gap-4">
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
              <input
                placeholder="00"
                className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black"
              />
              <span className=" text-black">.</span>
              <input
                placeholder="00"
                className=" w-[48%] p-2 border border-solid h-5 ml-2 border-black"
              />
            </div>
          </div>

          {/* Taxes */}
          <div>
            <h1 className=" block">Taxes</h1>
            <div className=" flex">
              <input
                placeholder="00"
                className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black"
              />
              <span className=" text-black">.</span>
              <input
                placeholder="00"
                className=" w-[48%] p-2 border border-solid h-5 ml-2 border-black"
              />
            </div>
          </div>

          {/* Create discount */}
          <div>
            <div className="flex justify-between text-white bg-teal p-2 rounded-md">
              Want to create discounts?{" "}
              <span
                className=" bg-white rounded-full h-3 px-1 mt-1 text-teal text-[10px] font-thin cursor-pointer"
                onClick={() => handleArrow()}
              >
                {isUp ? "∧" : "V"}
              </span>
            </div>
            {!isUp && (
              <div className="pt-4 pl-2">
                <div className=" flex ">
                  Discount percentage
                  <input
                    type="text"
                    placeholder="00"
                    className=" w-10 border border-solid ml-3 mr-1 pl-2 border-black"
                  />
                  <span className=" text-black text-lg ">%</span>
                </div>
                <ToggleSwitch>Discount Codes</ToggleSwitch>
                <div className="flex bg-gray px-2 py-1 rounded-lg text-black">
                  <input
                    type="radio"
                    value="time"
                    name="duration"
                    id="time"
                    className=" appearance-none "
                  />
                  <label htmlFor="time" className=" cursor-pointer ">
                    Time limited
                  </label>
                  <input
                    type="radio"
                    value="number"
                    name="duration"
                    id="number"
                    className="appearance-none "
                  />
                  <label htmlFor="number" className=" cursor-pointer pl-3 ">
                    Number limited
                  </label>
                </div>
                <div className=" flex mt-2 justify-between">
                  <label>Duration</label>
                  <div>
                    <input
                      type="text"
                      placeholder="00"
                      className="border border-solid w-10 h-8 border-black p-2"
                    />{" "}
                    <span className=" text-black font-thin text-sm">days</span>
                  </div>
                </div>
              </div>
            )}
          </div>
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
