// import { useShelves } from "../Contexts/VendorShelves";
import InfoAndPricing from "./InfoAndPricing";
import VendorNavBar from "./VendorNavBar";

function AddProductPage() {
 
  // const { updateShelves, shelfID } = useShelves();
  // function handleAddProduct() {}
 
  // console.log("Shelf ID: ", shelfID);
  return (
    <>
      <VendorNavBar />
        <form>
      <div className=" grid-rows-[auto,1fr] ">
          {/* Upload Image  */}
          <div className="bg-black">Upload Image</div>

          {/* Item Information */}
          <InfoAndPricing />
         
      </div>
    </form>
    </>
  );
}

export default AddProductPage;
