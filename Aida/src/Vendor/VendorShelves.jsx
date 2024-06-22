import add from "../assets/UI/addition.png";
import VendorNavBar from "./VendorNavBar";
import { useState } from "react";
import ItemCard from "../Vendor/ItemCard";
import { useNavigate } from "react-router-dom";

function VendorShelves() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleAddProduct() {
    // Sets the ID of the new product
    // const productID = products?.length>0?products?.length:1;
    navigate("/addproduct");
  }

  function deleteProduct(itemID) {
    const updatedItems = products.filter((item) => item.itemID !== itemID);
    setProducts(updatedItems);
    // Send updated Items to backend
  }

  return (
    <>
      <VendorNavBar />
      <div>
        {/* The products  */}
        {/* Items in the shelf */}
        {products.map((item, index) => (
          <ItemCard
            product={item}
            key={`item-${index}`}
            deleteProduct={deleteProduct}
          />
        ))}
        <div className=" flex justify-end m-4">
          <div className=" bg-FlamingoPink text-white p-2 rounded-lg   md:mr-4 ">
            <button onClick={() => handleAddProduct()} className="flex gap-2">
              Add Product
              <span>
                <img src={add} className="w-4 mt-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorShelves;
