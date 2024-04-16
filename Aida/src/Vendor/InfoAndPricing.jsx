/* eslint-disable react/prop-types */
import { useState } from "react";
import info from "../assets/vendor/products/information-button.png";
import pricing from "../assets/vendor/products/price-tag.png";
import ToggleSwitch from "../UI/ToggleSwitch";
import TitleAndLogo from "../UI/TitleAndLogo";



function InfoAndPricing({ register,watch,setValue }) {
  const [hasDiscount, setHasDiscount] = useState(false);
  function handleArrow() {
    setHasDiscount((prevState) => !prevState);
  }
  // get the current value of the stock count
  const availableStockCount = watch("availableStockCount");

  const discountDurationType = watch("discountDurationType")
  const handleIncrement = ()=>{
    setValue("availableStockCount", availableStockCount +1);
  }
  const handleDecrement = ()=>{
    if(availableStockCount>0){
      setValue("availableStockCount", availableStockCount -1);
  
    }
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
          <TitleAndLogo imgURL={info} style="flex justify-center">
            Info
          </TitleAndLogo>

          {/* Title  */}
          <div>
            <h1>Title</h1>
            <input
              type="text"
              {...register("title")}
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
              {...register("category")}
            >
              <option value="fashion">Fashion</option>
              <option  value="electronics">Electronics</option >
              <option value="sports">Sports</option>
              <option value="health">Health &amp; wellness</option>
              <option value="pet supplies">Pet supplies</option>
              <option value="books">Books</option>
              <option value="home essentials">Home essentials</option>
              <option value="office supplies">Office supplies</option>
            </select>
          </div>

          {/* ///Available Stock */}
          <div className="flex justify-between ">
            <div>Available stock</div>
            <div className="flex ">
              <button type="button" onClick={handleDecrement}>
                -
              </button>
              <input
                type="text"
                className=" w-12 mx-2 pl-2 "
                value={availableStockCount}
                {...register('availableStockCount')}
                readOnly
              />
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>

          {/* Subscription */}
          <div className=" flex justify-between ">
            <label htmlFor="subscription">Enable subscription</label>
            <input
              type="checkbox"
              {...register("enableSubscription")}
              id="subscription"
            />
          </div>

          {/* Is Used */}
          <div className=" flex justify-between ">
            <label htmlFor="used">Is Used</label>
            <input type="checkbox" {...register("isUsed")} id="used" />
          </div>
        </div>

        {/* Pricing */}
        <div className=" grid grid-rows-[auto,1fr,1fr] pl-10 gap-4">
          <TitleAndLogo
            imgURL={pricing}
            imgStyle="h-8"
            style="flex justify-center"
          >
            Pricing
          </TitleAndLogo>

          {/* Price */}
          <div>
            <h1 className=" block">Price</h1>
            <div className=" flex">
            <input
  placeholder="00.00"
  className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black"
  name="price"
  {...register("price")}
/>
            </div>
          </div>

          {/* Taxes */}
          <div>
            <h1 className=" block">Taxes</h1>
            <div className=" flex">
            <input
  placeholder="00.00"
  className=" w-[48%] border border-solid h-5 p-2 mr-2 border-black"
  name="taxesBeforeDecimal"
  {...register('taxes')}
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
                {hasDiscount ? "∧" : "V"}
              </span>
            </div>
            {hasDiscount && (
              <div className="pt-4 pl-2">
                <div className=" flex ">
                  Discount percentage
                  <input
                    type="text"
                    placeholder="00"
                    className=" w-10 border border-solid ml-3 mr-1 pl-2 border-black"
                    {...register("discountPercentage")}
                  />
                  <span className=" text-black text-lg ">%</span>
                </div>
                <ToggleSwitch register={register}>Discount Codes</ToggleSwitch>
                <div className="flex bg-gray w-fit rounded-lg text-black">
                  <input
                    type="radio"
                    value= "time"
                    id= "time"
                    name="discountDurationType"
                    className=" appearance-none "
                    {...register('discountDurationType')}
                  />
                  <label htmlFor="time" className={` cursor-pointer  p-1 ${discountDurationType === 'time'?"bg-IceBlue rounded-md": ""}`}>
                    Time limited
                  </label>
                  <input
                    type="radio"
                    value="number"
                    id="number"
                    name="discountDurationType"
                    className="appearance-none "
                    {...register('discountDurationType')}
                  />
                  <label htmlFor="number"  className={` cursor-pointer  p-1 ${discountDurationType === 'number'?"bg-IceBlue rounded-md": ""}`}>
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
                      {...register("durationInDays")}
                    />{" "}
                    <span className=" text-black font-thin text-sm">days</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAndPricing;
