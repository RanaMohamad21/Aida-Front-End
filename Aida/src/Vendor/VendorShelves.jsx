import add from "../assets/UI/addition.png";
import VendorNavBar from "./VendorNavBar";
import { useState } from "react";
import Shelves from "../UI/Shelves";
import dummyImage1 from "../assets/dummy/Product images.png";
import dummyImage2 from "../assets/dummy/Samsung.png";

const initialShelves = [
  {
    shelveName: "Men's fashion",
    shelfID: 0,
    shelveItems: [
      {
        itemID: 0,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's suit",
        discountValue: 0.05,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage1,
      },
      {
        itemID: 1,
        rating: 3.0,
        isBestSeller: false,
        itemName: "Armini Gold",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage1,
      },
      {
        itemID: 2,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Armini",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage1,
      },
      {
        itemID: 3,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's suit",
        discountValue: 0.07,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage1,
      },
    ],
  },
  {
    shelveName: "Phones's fashion",
    shelveID: 1,
    shelveItems: [
      {
        itemID: 0,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's like",
        discountValue: 0.05,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 1,
        rating: 3.0,
        isBestSeller: false,
        itemName: "Samsung",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 2,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Samsung the dup",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 3,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's suit",
        discountValue: 0.07,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
    ],
  },
  {
    shelveName: "New Fashion",
    shelveID: 2,
    shelveItems: [
      {
        itemID: 0,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's like",
        discountValue: 0.05,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 1,
        rating: 3.0,
        isBestSeller: false,
        itemName: "Samsung",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 2,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Samsung the dup",
        discountValue: 0,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
      {
        itemID: 3,
        rating: 3.0,
        isBestSeller: true,
        itemName: "Men's suit",
        discountValue: 0.07,
        pricebeforeDiscount: 70000,
        availableLeft: 10,
        revenues: 12023,
        subscribed: 20,
        dummyImage: dummyImage2,
      },
    ],
  },
];

function VendorShelves() {
  const [shelves, setShelves] = useState(
    initialShelves.map((shelf, index) => ({ ...shelf, shelveID: index }))
  );
  const [newShelf, setNewShelf] = useState("");
  const [currentShelfID, setCurrentShelfID] = useState();
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
          <div className="flex my-3 items-end justify-end">
            <div>
              <input
                type="text"
                placeholder="Shelf name..."
                value={newShelf}
                onChange={(e) => {
                  setNewShelf(e.target.value);
                }}
                className="border m-2 h-7 p-2 border-solid border-black "
              />
            </div>
            <div className=" bg-FlamingoPink inline-block text-white px-2 py-1 my-auto  rounded-lg   md:mr-4 ">
              <button
                className="flex gap-2"
                onClick={() => {
                  handleAddShlef();
                }}
              >
                Add Shelf{" "}
                <span>
                  <img src={add} className="w-4 mt-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="block ">
            <p className="text-teal mx-3 mb-3">
              Tip: placing products on the same shelf allows them to be
              recommended together when a customer buys your product, so placing
              products that are often bought together in the same shelf will
              increase your sales
            </p>
          </div>
        </div>

        {/* The Shelves  */}

        <Shelves
          shelves={shelves}
          setShelves={setShelves}
          deleteItem={deleteItemFromShelf}
          setshelfID={setCurrentShelfID}
        />
      </div>
    </>
  );
}

export default VendorShelves;
