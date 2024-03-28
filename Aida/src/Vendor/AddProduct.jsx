import { useShelves } from "../Contexts/VendorShelves";
import VendorNavBar from "./VendorNavBar";
function AddProduct(props) {
  // eslint-disable-next-line react/prop-types
  console.log(props);
  // eslint-disable-next-line react/prop-types
  //   const { shelfID } = state;
  const { updateShelves, shelfID } = useShelves();
  function handleAddProduct(){

  }

  console.log("Shelf ID: ", shelfID);
  return (
    <>
    <VendorNavBar />
    <div className=" grid-rows-[auto,1fr]">
      <form>
      {/* Upload Image  */}
      <div></div>


      {/* Item Information */}
      <div className=" grid-rows-5">
        {/* Title  */}
        <div ><p className=" mx-auto text-teal ">product info</p>
        </div>

        {/* Info and Pricing    */}
        <div></div>

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
