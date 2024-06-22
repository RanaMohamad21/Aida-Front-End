// /* eslint-disable react/prop-types */
// import trash from "../assets/vendor/products/trash.png";
// import add from "../assets/UI/addition.png";

// import { useNavigate } from "react-router-dom";
// import ItemCard from "../Vendor/ItemCard";



// //? IDs start at 0
// function Shelves({ shelves, setShelves, deleteItem, setshelfID }) {
//   const navigate = useNavigate();

//   function handleAddProduct(ID) {
//     console.log("The ID is: ", ID);
//     setshelfID(ID);
//     const productID = shelves[ID].shelveItems
//       ? shelves[ID].shelveItems[shelves[ID].shelveItems.length - 1].itemID + 1
//       : 0;
//     navigate("/addproduct", { state: { productID, shelfID: ID } });
//   }

//   return (
//     <div className="flex flex-col m-2 mb-16 ">
//       {shelves.map((shelf, index) => {
//         const items = shelf.shelveItems;

//         return (
//           <>
            
            
//               {/* Items in the shelf */}
//               {items.map((item, index) => (
//                 <ItemCard
//                   dummyItem={item}
//                   key={`item-${index}`}
//                   deleteItem={deleteItem}
//                   shelfID={shelf.shelveID}
//                 >h</ItemCard>
//               ))}

//             <div className=" flex justify-end">
//               <div className=" bg-FlamingoPink text-white p-2 rounded-lg   md:mr-4 ">
//                 <button
//                   onClick={() => handleAddProduct(shelf.shelveID)}
//                   className="flex gap-2"
//                 >
//                   Add Product
//                   <span>
//                     <img src={add} className="w-4 mt-1" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default Shelves;
