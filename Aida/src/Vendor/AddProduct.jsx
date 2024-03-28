import { useShelves } from "../Contexts/VendorShelves";
import VendorNavBar from "./VendorNavBar";
import info from "../assets/vendor/products/information-button.png";
import pricing from "../assets/vendor/products/price-tag.png";
function AddProduct(props) {
  // eslint-disable-next-line react/prop-types
  console.log(props);
  // eslint-disable-next-line react/prop-types
  //   const { shelfID } = state;
  const { updateShelves, shelfID } = useShelves();
  function handleAddProduct() {}

  console.log("Shelf ID: ", shelfID);
  return (
    <>
      <VendorNavBar />
      <div className=" grid-rows-[auto,1fr]">
        <form>
          {/* Upload Image  */}
          <div></div>

          {/* Item Information */}
          <div className="grid  grid-rows-5 px-10">
            {/* Title  */}
            <div className="flex justify-center mt-2 mb-8">
              <p className=" mx-auto text-teal ">product info</p>
            </div>

            {/* Info and Pricing    */}
            <div className=" grid grid-cols-2 ">
              <div className="border-r-2 border-gray">
              <div className=" flex justify-center ">
                <span className="px-2  ">
                  <img src={info} alt={"information"} />
                </span>
                <p className=" text-FlamingoPink flex font-semibold mt-1 ">
                  {" "}
                  Info
                </p>
              </div>
              <h1>Title</h1>
              <input  type="text" placeholder="Type..." />
              <h1>Category</h1>
              
              </div>
              <div className=" flex justify-center ">
                <span className="px-2  ">
                  <img src={pricing} alt={"pricing"} />
                </span>
                <p className=" text-FlamingoPink flex font-semibold mt-1 ">
                  {" "}
                  Pricing
                </p>
              </div>
            </div>

            {/* Specification  */}
            <div></div>

            {/* Tags  */}
            <div></div>

            {/* Description  */}
            <div></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
