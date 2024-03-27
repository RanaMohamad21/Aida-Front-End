import add from "../assets/UI/addition.png";
import VendorNavBar from "./VendorNavBar";
import { useState } from "react";
import Shelves from "../UI/Shelves";
import { useShelves } from "../Contexts/VendorShelves";

function VendorShelves() {
  const { shelves, setShelves } = useShelves();
  const [newShelf, setNewShelf] = useState("");

  function handleAddShlef() {
    const newShelfData = {
      shelveName: newShelf,
      shelveID: shelves.length,
      shelveItems: [],
    };
    setShelves((prevShelves) => [...prevShelves, newShelfData]);

    setNewShelf("");
  }
  function deleteItemFromShelf(shelfID, itemID) {
    const updatedShelves = shelves.map((shelf) => {
      if (shelf.shelveID === shelfID) {
        const updatedItems = shelf.shelveItems.filter(
          (item) => item.itemID !== itemID
        );
        return { ...shelf, shelveItems: updatedItems };
      }
      return shelf;
    });
    setShelves(updatedShelves);
  }
  return (
    <>
      <VendorNavBar />
      <div className="grid grid-rows-[auto,1fr] ">
        <div className=" flex flex-col gap-2">
          <dev className="flex my-3 items-end justify-end">
            <dev>
              <input
                type="text"
                placeholder="Shelf name..."
                value={newShelf}
                onChange={(e) => {
                  setNewShelf(e.target.value);
                }}
                className="border m-2 h-7 p-2 border-solid border-black "
              />
            </dev>
            <div className=" bg-FlamingoPink inline-block text-white px-2 py-1 my-auto  rounded-lg   md:mr-4 ">
              <button
                className="flex gap-2"
                onClick={() => {
                  handleAddShlef();
                }}
              >
                Add Shelve{" "}
                <span>
                  <img src={add} className="w-4 mt-1" />
                </span>
              </button>
            </div>
          </dev>
          <dev className="block ">
            <p className="text-teal mx-3 mb-3">
              Tip: placing products on the same shelf allows them to be
              recommended together when a customer buys your product, so placing
              products that are often bought together in the same shelf will
              increase your sales
            </p>
          </dev>
        </div>

        {/* The Shelves  */}

        <Shelves
          shelves={shelves}
          setShelves={setShelves}
          deleteItem={deleteItemFromShelf}
        />
      </div>
    </>
  );
}

export default VendorShelves;
