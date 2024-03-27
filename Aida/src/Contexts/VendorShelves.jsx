import { createContext, useContext, useState } from "react";

import dummyImage1 from "../assets/dummy/Product images.png";
import dummyImage2 from "../assets/dummy/Samsung.png";

const VendorShelvesContext = createContext();

// eslint-disable-next-line react/prop-types
function VendorShelvesProvider({ children }) {
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

  const [shelves, setShelves] = useState(initialShelves);
  const [shelfID, setshelfID] = useState(-1);
  return (
    <VendorShelvesContext.Provider
      value={{ shelves, setShelves, shelfID, setshelfID }}
    >
      {children}
    </VendorShelvesContext.Provider>
  );
}

function useShelves() {
  const context = useContext(VendorShelvesContext);
  if (context === undefined)
    throw new Error("VendorContext was used outside VendorProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { VendorShelvesProvider, useShelves };
