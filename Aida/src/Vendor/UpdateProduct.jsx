// import { useEffect, useState } from "react";
// import AddProductPage from "./AddProductPage";
// import { useLocation } from "react-router-dom";

// // import { useForm } from "react-hook-form";


// // const dummyProduct = {
// //     title: "Samsung A34",
// //     category:"Fashion",
// //     availableStockCount: 5,
// //     price: 500,
// //     taxes: 50,
// //     specification:[{ name: "Color", specification: "Red" },],
// //     tags:[
// //         "Electronic Devices",
// //         "Dual SIM",
// //         "Exclusive",
// //       ],
// //     description:"The best mobile To ever exist",
// //     hasDiscount:false,
// //     discountDurationType:"",
// //     enableSubscription:true,
// //     isUsed:true,
// //     discountPercentage:"",
// //     durationInDays:"",
// //     hasDiscountCode:""
// // };


// // const onSubmit = (data) => {
// //   const formData = new FormData();
// //   for (let i = 0; i < data.images.length; i++) {
// //     formData.set(`images[${i}]`, data.images[i]);
// //   }
// //   formData.append("title", data.title);
// //   formData.append("category", data.category);
// //   formData.append("availableStockCount", availableStockCount);
// //   formData.append("price", Number(price));
// //   formData.append("taxes", Number(taxes));
// //   formData.append("specifications", JSON.stringify(specifications));
// //   formData.append("tags", tags.join(","));
// //   formData.append("description", description);
// //   formData.append("hasDiscount", hasDiscount);
// //   formData.append("discountDurationType", discountDurationType);
// //   formData.append("enableSubscription", data.enableSubscription);
// //   formData.append("isUsed", data.isUsed);
// //   formData.append("discountPercentage", data.discountPercentage);
// //   formData.append("durationInDays", data.durationInDays);
// //   formData.append("hasDiscountCode", data.hasDiscountCode);

// //   // Send the form data to the server to update the product
// //   fetch(`/api/products/${productId}`, {
// //     method: "PUT",
// //     body: formData,
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log("Product updated successfully", data);
// //       // Redirect the user to the product page or the vendor dashboard
// //       // history.push(`/products/${productId}`);
// //     })
// //     .catch((error) => {
// //       console.error("Error updating product", error);
// //       // Show an error message to the user
// //     });
// // };
// function UpdateProductPage() {
//   const location = useLocation();
//   const {productDetails, productId, shelfID} = location.state;

//   // Get the initial product data from the server
//   const [product, setProduct] = useState(productDetails);

//   useEffect(() => {
//     fetch(`/api/products/${productId}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data));
//   }, [productId]);

//   // If the product data is not yet loaded, show a loading message
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   // Use the `updateProductPage` function to update the product data
//   return (
//     <AddProductPage
//       product={product}
//       onSubmit={(data) => updateProductPage(productId, data)}
//     />
//   );
// }

// export default UpdateProductPage;
