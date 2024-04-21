import { useState } from "react";
import Navbar from "../UI/Navbar";
import Searchbar from "../UI/Searchbar";
import StarRating from "../UI/StarRating";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

function SearchPage() {
  const [starRating, setStarRating] = useState(0);
  const { register, handleSubmit, control } = useForm();

  function onSubmit(data) {
    console.log(data);
    console.log(starRating);
    // Filtering logic
  }
  return (
    <>
      <Searchbar />
      <Navbar />
      <div className="grid grid-cols-[1fr,4fr] ">
        {/* Search Filters */}
        <form
          className=" border-r-IceBlue border-r-solid border-r-[3px] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" text-teal py-3 pl-5 fixed  rounded-lg  ">
            <h1 className=" text-[23px] text-FlamingoPink">Search filters</h1>
            {/* Rating component */}
            <p className=" text-lg mt-3 mb-1">Minimum rating</p>
            <StarRating onSetRating={setStarRating} />

            {/* Price range  */}
            <h1 className=" text-lg mt-2">Price</h1>
            {/* Convert them into numbers */}
            <label className=" block text-black text-sm">Min</label>
            <input
              type="text"
              placeholder="00.00"
              className=" border w-[96%] border-gray border-solid pl-1"
              {...register("minPrice", {
                setValueAs: (value) => parseFloat(value),
              })}
            />
            <label className=" block text-black text-sm mt-2">Max</label>
            <input
              type="text"
              placeholder="00.00"
              className=" border w-[96%] border-gray border-solid pl-1 mb-4 "
              {...register("maxPrice", {
                setValueAs: (value) => parseFloat(value),
              })}
            />
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
              className="mt-4 w-[96%] text-white bg-FlamingoPink rounded-md cursor-pointer hover:text-IceBlue hover:w-[97%] transition-all duration-75 "
            />
          </div>
        </form>
        <DevTool control={control} />
        {/* Products */}
        <div className="  p-6 ">
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
