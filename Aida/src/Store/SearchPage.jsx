import { useState } from "react";
import Navbar from "../UI/Navbar";
import Searchbar from "../UI/Searchbar";
import StarRating from "../UI/StarRating";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import UpperFooter from "../UI/UpperFooter";
import PaginatedProducts from "./PaginatedProducts";
import axios from 'axios';

function SearchPage() {
  const [starRating, setStarRating] = useState(0);
  const [errors, setErrors] = useState(""); // State for form errors
  const [products, setProducts] = useState([]); 
  const { register, handleSubmit, control } = useForm();  // React Hook Form setup



 
  // Prepare the search request payload
  const searchRequest = {
    search: data.search || "", // Add search keyword if applicable
    minRating: starRating,
    minPrice: data.minPrice,
    maxPrice: data.maxPrice,
    available: data.available || false,
    is_used: data.unused || false,
    discount: data.discounts || false,
    bestSeller: data.bestSeller || false,
    page: 1 // You can manage pagination accordingly
  };
  

  
  return (
    <>
      <Searchbar />
      <Navbar />
      <div className="grid grid-cols-[1fr,4fr]  ">
        {/* Search Filters */}
        <div className=" relative ">
          <div className=" sticky top-10 left-0 right-0 z-[1]"> 
          
        <form
          className=" border-r-IceBlue border-r-solid border-r-[3px]  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" text-teal py-3 pl-5  rounded-lg  ">
            <h1 className=" text-[23px] text-FlamingoPink">Search filters</h1>
            {/* Rating component */}
            <p className=" text-lg mt-3 mb-1">Minimum rating</p>
            <StarRating onSetRating={setStarRating} />

            {/* Price range  */}
            <h1 className=" text-lg mt-2">Price</h1>

            <label className=" block text-black text-sm">Min</label>
            <input
              type="text"
              placeholder="00.00"
              className={`border border-gray border-solid pl-1 mb-4 w-[50%]`}
              {...register("minPrice", {
                setValueAs: (value) => parseFloat(value)
              })}
            />
            
            <label className=" block text-black text-sm mt-2">Max</label>
            <input
              type="text"
               placeholder="00.00"
               className={`border border-gray border-solid pl-1 mb-4 w-[50%] bg-white`}
              {...register("maxPrice", {
                setValueAs: (value) => parseFloat(value),
              })}
            />
            {/* Display error message if  price range validation fails */}
            {errors && (
              <p className=" text-FlamingoPink w-[50%] pb-4"> {errors} </p>
            )}
            {/* checkboxes */}
            <div>
              <input
                type="checkbox"
                id="discounts"
                {...register("discounts")}
              />
              <label htmlFor="discounts" className=" cursor-pointer">
                Discounts
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="bestSeller"
                {...register("bestSeller")}
              />
              <label htmlFor="bestSeller" className=" cursor-pointer">
                Best seller
              </label>
            </div>

            <div>
              <input type="checkbox" id="unused" {...register("unused")} />
              <label htmlFor="unused" className=" cursor-pointer">
                Unused
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="available"
                {...register("available")}
              />
              <label htmlFor="available" className=" cursor-pointer">
                Available
              </label>
            </div>
            {/* Search button */}
            <input
              type="submit"
              value="Enter"
              className="mt-4 w-[50%] text-white bg-FlamingoPink rounded-md cursor-pointer hover:text-IceBlue hover:w-[52%] transition-all duration-75 "
            />
          </div>
        </form>
        </div>
        </div>
        {/* For testing purposes */}
        <DevTool control={control} />
        
        <PaginatedProducts/>
        
        
      </div>
      <UpperFooter/>
    </>
  );
}

export default SearchPage;
