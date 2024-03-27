import { useShelves } from "../Contexts/VendorShelves";
function AddProduct(props) {
  // eslint-disable-next-line react/prop-types
  console.log(props);
  // eslint-disable-next-line react/prop-types
  //   const { shelfID } = state;
  const { updateShelves, shelfID } = useShelves();
  console.log("Shelf ID: ", shelfID);
  return (
    <div>
      <h1>Shelf ID: {shelfID}</h1>
      {/* You can render other components or UI elements related to adding a product */}
    </div>
  );
}

export default AddProduct;
