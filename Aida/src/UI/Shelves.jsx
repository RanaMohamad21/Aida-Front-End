/* eslint-disable react/prop-types */
import trash from "../assets/vendor/products/trash.png";
import add from "../assets/UI/addition.png";
import ItemCard from "../Vendor/ItemCard";
import { useNavigate } from "react-router-dom";



//? IDs start at 0
function Shelves({ shelves, setShelves, deleteItem, setshelfID }) {
  const navigate = useNavigate();
  function handleDeleteShelf(shelveToDelete) {
    const updatedShelves = shelves.filter(
      (shelf) => shelf.shelveID !== shelveToDelete
    );
    console.log("Deleted Shelve number ", shelveToDelete);
    updatedShelves.forEach((shelf, index) => {
      shelf.shelveID = index;
    });
    setShelves(updatedShelves);
  }
  function handleAddProduct(ID) {
    console.log("The ID is: ", ID);
    setshelfID(ID);
    const productID = shelves[ID].shelveItems
      ? shelves[ID].shelveItems[shelves[ID].shelveItems.length - 1].itemID + 1
      : 0;
    navigate("/addproduct", { state: { productID, shelfID: ID } });
  }

  return (
    <div className="flex flex-col m-2 mb-16 ">
      {shelves.map((shelf, index) => {
        const items = shelf.shelveItems;

        return (
          <>
            <div
              className={`flex justify-between md:mr-4  ${
                index != 0 ? "mt-14" : ""
              }`}
              key={`shelf-${shelf.ID}`}
            >
              <div className="p-2 bg-teal inline-block max-w-max text-white ml-4 ">
                {shelf.shelveName}
              </div>
              <div className=" bg-white items-end hover:pl-3 transition-all duration-100 ">
                <button onClick={() => handleDeleteShelf(shelf.shelveID)}>
                  <img src={trash} />
                </button>
              </div>
            </div>
            <div
              className="grid lg:grid-cols-5 sm:grid-cols-3 gap-y-3 bg-teal rounded-[5%] bg-opacity-5"
              key={index}
            >
              {/* Items in the shelf */}
              {items.map((item, index) => (
                <ItemCard
                  dummyItem={item}
                  key={`item-${index}`}
                  deleteItem={deleteItem}
                  shelfID={shelf.shelveID}
                />
              ))}
            </div>
            <div className=" flex justify-end">
              <div className=" bg-FlamingoPink text-white p-2 rounded-lg   md:mr-4 ">
                <button
                  onClick={() => handleAddProduct(shelf.shelveID)}
                  className="flex gap-2"
                >
                  Add Product
                  <span>
                    <img src={add} className="w-4 mt-1" />
                  </span>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Shelves;
