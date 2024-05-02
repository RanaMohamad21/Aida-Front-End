import { useState } from "react";
import Navbar from "../UI/Navbar";
import Searchbar from "../UI/Searchbar";
import StarRating from "../UI/StarRating";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

function SearchPage() {
  const [starRating, setStarRating] = useState(0);
  const [errors, setErrors] = useState("");
  const {
    register,
    handleSubmit,
    control,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    console.log(starRating);
    if(data.minPrice >= data.maxPrice){
      setErrors("The minimum price must be smaller than the maximum price.")
      return;
    }
    // Filtering logic
  }

  
  return (
    <>
      <Searchbar />
      <Navbar />
      <div className="grid grid-cols-[1fr,4fr]  ">
        {/* Search Filters */}
        <form
          className=" border-r-IceBlue border-r-solid border-r-[3px]  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" text-teal py-3 pl-5 fixed  rounded-lg  ">
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
              // defaultValue={0} // Set default value for minPrice as 0
              className={`border border-gray border-solid pl-1 mb-4 w-[50%]`}
              {...register("minPrice", {
                setValueAs: (value) => parseFloat(value)
              })}
            />
            
            <label className=" block text-black text-sm mt-2">Max</label>
            <input
              type="text"
              // Set default value for maxPrice as maximum float value
              placeholder="00.00"
              // value={Number.MAX_VALUE}
              className={`border border-gray border-solid pl-1 mb-4 w-[50%] bg-white`}
              {...register("maxPrice", {
                setValueAs: (value) => parseFloat(value),
              })}
            />
            {/* Display error message if validation fails */}
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
        <DevTool control={control} />
        {/* Products */}
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac odio
          vitae ante molestie suscipit. Pellentesque vel fringilla ipsum, sed
          maximus arcu. Nulla vehicula arcu at nisl varius, ut pretium erat
          ultricies. Praesent vel mauris in ante semper finibus vel vitae enim.
          Phasellus at nulla erat. In tincidunt elementum lacus at ornare. Morbi
          felis sem, tempus at vestibulum id, tempor eu erat. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec tempor metus sit amet vulputate suscipit. Suspendisse
          suscipit ullamcorper lectus, sit amet tincidunt nisi mollis vitae.
          Cras lacus augue, viverra a tincidunt a, fringilla a quam. Praesent
          non sodales nunc. Nullam eu metus eu sapien efficitur cursus. Fusce
          placerat tortor id suscipit maximus. Nam at blandit nisi. Phasellus ut
          sollicitudin odio. Etiam rhoncus, leo id suscipit facilisis, lectus
          neque euismod orci, in molestie tellus ante vel odio. Mauris id
          pharetra metus. Sed sodales facilisis tortor eu tempus. Maecenas at
          arcu ultrices, interdum lectus sit amet, hendrerit quam. Nullam
          iaculis convallis diam eu semper. Integer ipsum quam, placerat sed est
          in, dignissim ultrices ligula. Sed luctus risus mauris, sit amet
          iaculis augue porttitor in. Aenean et pellentesque odio. In a maximus
          odio. Nullam viverra risus risus. Integer erat dolor, accumsan vel
          mauris et, pellentesque suscipit erat. Sed rhoncus ut purus sit amet
          aliquam. Vivamus faucibus mauris a ligula viverra porta. Etiam lacinia
          ligula efficitur dui consectetur tempus. Vivamus lobortis gravida eros
          et tempus. Pellentesque at massa massa. In egestas eros libero, eget
          convallis ante euismod vel. Mauris id ultricies odio, vitae
          pellentesque ex. Sed et leo nisl. Phasellus fermentum, orci eu viverra
          efficitur, nulla odio vehicula nisi, sit amet efficitur mauris nibh
          pharetra nunc. In ipsum urna, sagittis quis odio in, bibendum luctus
          dolor. Nullam ac lacus ultrices, facilisis ex vitae, viverra erat.
          Pellentesque et volutpat magna, ac elementum ipsum. Nam dignissim at
          sapien ac porta. Praesent pulvinar neque sapien, in vehicula nulla
          tempor non. Phasellus rhoncus pellentesque magna, sed fringilla leo
          rutrum id. Sed gravida lorem non sodales dapibus. In hac habitasse
          platea dictumst. Maecenas placerat dolor sit amet felis vestibulum, a
          gravida metus finibus. Etiam luctus lectus nec scelerisque rutrum.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Phasellus ultricies tempor mi, in imperdiet ipsum congue sit amet.
          Quisque consectetur vitae felis quis molestie.
        </div>
      </div>
    </>
  );
}

export default SearchPage;
